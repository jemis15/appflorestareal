import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useProject } from "../../hooks/useProject";
import BaseText from "../Base/BaseText";
import BaseButton from "../Button/BaseButton";
import { Popup } from "../Popup";
import {
  Close as IconClose,
  Crear as IconCrear,
  Search as IconSearch,
} from "../SVGIcons";

const TOKEN_APIPERU =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZsb3Jlc21lemFqYW1lczE5OTlAb3V0bG9vay5jb20ifQ.nLxqr0yP44cDZefPtBS7cBta_jJDbZXB6SmQrHtDseI";

const ButtonCreateClient = ({onSuccessCreate}) => {
  return (
    <div>
      <Popup
        trigger={
          <BaseButton
            variant="create"
            icon={<IconCrear size="16" fill />}
            label={
              <BaseText size="value" weight="bold">
                Crear
              </BaseText>
            }
          />
        }
        overlayStyle={{ background: "rgba(0,0,0,0.4)" }}
        lockScroll
        modal
        nested
        closeOnDocumentClick={false}
      >
        {(close) => (
          <ContentFormCreateClient
            close={(e) => {
              if (e === "success_create") {
                close();
                return;
              }

              const continueClose = confirm(
                "Si sales ahora, no se creara el cliente ni se guardara el progreso."
              );
              if (continueClose) {
                close();
              }
            }}
            onSuccessCreate={onSuccessCreate}
          />
        )}
      </Popup>
    </div>
  );
};

const ContentFormCreateClient = ({ close, onSuccessCreate }) => {
  const { user } = useAuth();
  const { query } = useRouter();
  const { project: project_id } = query;
  const { project } = useProject({ project_id });
  const [formData, setFormData] = useState({
    name: "",
    type_document: "dni",
    document: "",
    direction: "",
    department: "",
    province: "",
    district: "",
    email: "",
    telefono: "",
    important_date: "",
    sex: "",
    project_id: project_id,
    other_client_data: [{ attribute: "", content: "" }],
  });
  const [sendingFormData, setSendingFormData] = useState(false);
  const [typeClient, setTypeClient] = useState("natural");
  const [tabSelect, setTabSelect] = useState("datos_generales"); //otros_datos
  const [searchingByDocument, setSearchingByDocument] = useState(false);
  const [errors, setErrors] = useState({
    errors: null,
    message: "",
  });

  const onUpdateOtherClienteData = ({ id, attribute, content }) => {
    const listData = formData.other_client_data;
    const newData = listData.map((data, key) => {
      if (key === id) {
        return { attribute, content };
      }
      return data;
    });
    setFormData({ ...formData, other_client_data: newData });
  };

  const onDeleteOtherClienteData = ({ id }) => {
    const listData = formData.other_client_data;
    const newData = listData.filter((data, key) => key != id);
    setFormData({ ...formData, other_client_data: newData });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sendingFormData) {
      return;
    }

    setSendingFormData(true);
    try {
      await axios.post("/api/clients", formData);
      close("success_create");
      onSuccessCreate();
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
    setSendingFormData(false);
  };

  const changeTabSelect = (tabSelect) => {
    setTabSelect(tabSelect);
  };

  const handleSearchByDocument = async () => {
    const type_document = formData.type_document;
    const document = formData.document;

    if (type_document !== "dni" && type_document !== "ruc") {
      return;
    }

    if (searchingByDocument) {
      return;
    }

    setSearchingByDocument(true);
    try {
      const data = await fetch(
        `https://dniruc.apisperu.com/api/v1/${type_document}/${document}?token=${TOKEN_APIPERU}`
      );
      const apiData = await data.json();

      if (!apiData.dni) {
        throw "No encontramos nada. Intente con otros datos.";
      }

      if (type_document === "dni") {
        setFormData({
          ...formData,
          name: `${apiData.nombres} ${apiData.apellidoPaterno} ${apiData.apellidoMaterno}`,
        });
      }
      if (type_document === "ruc") {
        setFormData({
          ...formData,
          name: `${apiData.razonSocial}`,
          department: `${apiData.departamento || ""}`,
          province: `${apiData.provincia || ""}`,
          district: `${apiData.distrito || ""}`,
          direction: `${apiData.direccion || ""}`,
        });
      }
      setErrors({ ...errors, errors: { ...errors.errors, document: "" } });
    } catch (error) {
      console.log(error);
      setErrors({
        ...errors,
        errors: {
          ...errors.errors,
          document: "No encontramos nada, intente con otros datos.",
        },
      });
    }
    setSearchingByDocument(false);
  };

  const handleInputBlur = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const length = value.length;
    switch (name) {
      case "document":
        if (formData.type_document === "dni" && length !== 8) {
          setErrors({
            ...errors,
            errors: {
              ...errors.errors,
              document: "El documento deve contener 8 digitos.",
            },
          });
        } else if (formData.type_document === "ruc" && length !== 11) {
          setErrors({
            ...errors.errors,
            errors: {
              ...errors.errors,
              document: "El documento deve contener 11 digitos.",
            },
          });
        } else {
          setErrors({
            ...errors.errors,
            errors: {
              ...errors.errors,
              document: "",
            },
          });
        }
        break;

      default:
        break;
    }
  };

  if (!project || !user || !user.id) {
    return <div>Sucedio algo inesperado, vuelva a intentarlo mas tarde.</div>;
  }

  return (
    <div
      className="fixed top-0 right-0 bottom-0 z-20 bg-white"
      style={{ width: 450 }}
    >
      <form onSubmit={handleSubmit} className="h-full">
        <div className="flex flex-col h-full">
          <HeaderContentForm
            close={close}
            tabSelect={tabSelect}
            changeTabSelect={changeTabSelect}
            projectName={project.name}
          />
          <div className="flex-auto px-4 py-4 overflow-y-auto">
            {tabSelect === "datos_generales" && (
              <>
                <div>
                  <Label>Tipo de cliente</Label>
                  <div className="flex space-x-4 mt-2">
                    <ButtonInputRadio
                      textLabel="Natural"
                      name="type_client"
                      checked={typeClient === "natural"}
                      onChange={(_) => {
                        setTypeClient("natural");
                        setFormData({ ...formData, type_document: "dni" });
                      }}
                    />
                    <ButtonInputRadio
                      textLabel="Jurídico"
                      name="type_client"
                      checked={typeClient === "juridico"}
                      onChange={(_) => {
                        setTypeClient("juridico");
                        setFormData({ ...formData, type_document: "ruc" });
                      }}
                    />
                  </div>
                </div>
                <button
                  onClick={() => close((e) => console.log(e, "eliminando"))}
                >
                  Cerrar ventana
                </button>

                <div className="flex space-x-4 mt-4">
                  <div className="flex-1">
                    <Label>Tipo de documento</Label>
                    <div className="flex space-x-2 mt-2">
                      {typeClient === "natural" && (
                        <>
                          <ButtonInputRadio
                            textLabel="DNI"
                            name="type_document"
                            value="dni"
                            checked={formData.type_document === "dni"}
                            onChange={handleInputChange}
                          />
                          <ButtonInputRadio
                            textLabel="Otro"
                            name="type_document"
                            value="otro"
                            checked={formData.type_document === "otro"}
                            onChange={handleInputChange}
                          />
                        </>
                      )}
                      {typeClient === "juridico" && (
                        <ButtonInputRadio
                          textLabel="RUC"
                          name="type_document"
                          value="ruc"
                          checked={formData.type_document === "ruc"}
                          onChange={handleInputChange}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <Label>Número de documento</Label>
                    <div className="flex space-x-2 relative mt-2">
                      <Input
                        className="w-full"
                        name="document"
                        onChange={handleInputChange}
                        value={formData.document}
                        onBlur={handleInputBlur}
                        hasError={errors.errors && errors.errors.document}
                      />
                      {(formData.type_document === "dni" ||
                        formData.type_document === "ruc") && (
                        <button
                          type="button"
                          className={`${
                            searchingByDocument ? "bg-blue-400" : "bg-blue-500"
                          } text-white rounded-md px-3`}
                          title="buscar"
                          onClick={handleSearchByDocument}
                        >
                          {searchingByDocument ? (
                            <IconSpin className="animate-spin" />
                          ) : (
                            <IconSearch />
                          )}
                        </button>
                      )}
                    </div>

                    <FormError
                      error={errors.errors && errors.errors.document}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Label>
                    {typeClient === "natural" && "Nombres y apellidos"}
                    {typeClient === "juridico" && "Razon social"}
                  </Label>
                  <Input
                    className="mt-2 w-full"
                    name="name"
                    onChange={handleInputChange}
                    value={formData.name}
                    hasError={errors.errors && errors.errors.name}
                  />
                  <FormError error={errors.errors && errors.errors.name} />
                </div>

                <div className="mt-4">
                  <Label>
                    {typeClient === "natural" && "Fecha de nacimiento"}
                    {typeClient === "juridico" && "Aniversario"}
                  </Label>
                  <Input
                    type="date"
                    className="mt-2"
                    name="important_date"
                    onChange={handleInputChange}
                    value={formData.important_date}
                    hasError={errors.errors && errors.errors.important_date}
                  />
                  <FormError
                    error={errors.errors && errors.errors.important_date}
                  />
                </div>

                {typeClient === "juridico" && (
                  <div className="mt-4">
                    <Label>
                      Nombres del representante legal · <OptionalText />
                    </Label>
                    <Input
                      className="mt-2 w-full"
                      name="legal_representative"
                      onChange={handleInputChange}
                      value={formData.legal_representative}
                    />
                    <FormError
                      error={
                        errors.errors && errors.errors.legal_representative
                      }
                    />
                  </div>
                )}

                {typeClient === "natural" && (
                  <div className="mt-4">
                    <Label>
                      Sexo · <OptionalText />
                    </Label>
                    <div className="space-x-3 mt-2">
                      <ButtonInputRadio
                        textLabel="Mujer"
                        name="sex"
                        value="mujer"
                        checked={formData.sex === "mujer"}
                        onChange={handleInputChange}
                      />
                      <ButtonInputRadio
                        textLabel="Hombre"
                        name="sex"
                        value="hombre"
                        checked={formData.sex === "hombre"}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <BaseText size="header1" weight="bold">
                    Contacto
                  </BaseText>
                </div>

                <div className="mt-4">
                  <Label>Dirección</Label>
                  <Input
                    className="mt-2 w-full"
                    name="direction"
                    onChange={handleInputChange}
                    value={formData.direction}
                    hasError={errors.errors && errors.errors.direction}
                  />
                  <FormError error={errors.errors && errors.errors.direction} />
                </div>

                <div className="flex mt-4 space-x-4">
                  <div className="flex-1">
                    <Label>Departamento</Label>
                    <Input
                      className="mt-2 w-full"
                      name="department"
                      onChange={handleInputChange}
                      value={formData.department}
                      hasError={errors.errors && errors.errors.department}
                    />
                    <FormError
                      error={errors.errors && errors.errors.department}
                    />
                  </div>

                  <div className="flex-1">
                    <Label>Provincia</Label>
                    <Input
                      className="mt-2 w-full"
                      name="province"
                      onChange={handleInputChange}
                      value={formData.province}
                      hasError={errors.errors && errors.errors.province}
                    />
                    <FormError
                      error={errors.errors && errors.errors.province}
                    />
                  </div>

                  <div className="flex-1">
                    <Label>Distrito</Label>
                    <Input
                      className="mt-2 w-full"
                      name="district"
                      onChange={handleInputChange}
                      value={formData.district}
                      hasError={errors.errors && errors.errors.district}
                    />
                    <FormError
                      error={errors.errors && errors.errors.district}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Label>
                    Correo electrónico · <OptionalText />
                  </Label>
                  <Input
                    type="email"
                    className="mt-2 w-full"
                    name="email"
                    onChange={handleInputChange}
                    value={formData.email}
                    hasError={errors.errors && errors.errors.email}
                  />
                  <FormError error={errors.errors && errors.errors.email} />
                </div>

                <div className="mt-4">
                  <Label>
                    Número de teléfono · <OptionalText />
                  </Label>
                  <Input
                    type="tel"
                    className="mt-2 w-full"
                    name="telefono"
                    onChange={handleInputChange}
                    value={formData.telefono}
                  />
                  <FormError
                    error={errors.errors ? errors.errors.telefono : ""}
                  />
                </div>
              </>
            )}
            {tabSelect === "otros_datos" && (
              <>
                <div>
                  <BaseText size="value">Foto</BaseText>
                  <div className="mt-2">
                    <div className="border w-48 h-48 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src="https://2.bp.blogspot.com/_EZ16vWYvHHg/S7ipkaC2W9I/AAAAAAAAJn4/XR9nx76AVvs/s1600/www.BancodeImagenesGratuitas.com-Leon-1600x-4.jpg"
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* <button className="border rounded-md bg-gray-100 text-sm px-3 py-1 font-semibold mt-2">
                    Sube una foto
                  </button> */}
                  <div className="space-x-2">
                    <button className="relative px-3 py-1 mt-2 border bg-gray-200 font-semibold rounded-md">
                      <div className="text-sm text-gray-500">Sube una foto</div>
                      <input
                        type="file"
                        className="absolute top-0 left-0 w-full h-full z-30 opacity-0 cursor-pointer"
                        style={{ fontSize: "0px" }}
                      />
                    </button>
                    <button
                      type="button"
                      className="px-3 py-1 mt-2 border bg-red-500 rounded-md text-white text-sm font-semibold"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <BaseText size="value">Datos personalizados</BaseText>
                    <button
                      type="button"
                      className="text-blue-500 font-semibold text-sm"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          other_client_data: [
                            ...formData.other_client_data,
                            { attribute: "", content: "" },
                          ],
                        })
                      }
                    >
                      Agregar
                    </button>
                  </div>

                  {formData.other_client_data.map((otherData, key) => (
                    <CustomDataField
                      key={key}
                      id={key}
                      attribute={otherData.attribute}
                      content={otherData.content}
                      onContentChange={onUpdateOtherClienteData}
                      onDelete={onDeleteOtherClienteData}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <FooterContentForm
            isSendingFormData={sendingFormData}
            tabSelect={tabSelect}
            setTabSelect={setTabSelect}
            onCancel={close}
          />
        </div>
      </form>
    </div>
  );
};

const ButtonInputRadio = ({ textLabel, ...otherProps }) => {
  const randomId = Math.random().toString(16).substr(2, 8);
  return (
    <div className="inline-block relative border rounded-md flex-auto text-left">
      <label htmlFor={randomId} className="inline-block w-full pl-3 pr-10 py-2">
        {textLabel}
      </label>
      <input
        type="radio"
        id={randomId}
        className="absolute top-3 right-3"
        {...otherProps}
      />
    </div>
  );
};

const OptionalText = () => {
  return <span className="">(opcional)</span>;
};

const HeaderContentForm = ({
  close,
  tabSelect,
  changeTabSelect,
  projectName,
}) => {
  return (
    <div className="bg-white border-b">
      <div className="flex-none flex items-center justify-between px-5 py-5">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div>
            <BaseText size="value" color="heading">
              {projectName}
            </BaseText>
            <BaseText
              weight="bold"
              color="heading"
              className="text-2xl leading-6"
            >
              Crear cliente
            </BaseText>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="flex items-center justify-center p-3 hover:bg-gray-200 rounded-md"
            onClick={close}
          >
            <IconClose size="14" />
          </button>
        </div>
      </div>
      <div className="flex space-x-8 px-4 pb-4">
        <button
          type="button"
          className={`border rounded-md flex-1 py-1 ${
            tabSelect === "datos_generales"
              ? "border-blue-500 bg-blue-50 text-blue-500 font-semibold"
              : "bg-gray-50"
          }`}
          onClick={(_) => changeTabSelect("datos_generales")}
        >
          <BaseText size="value">Datos generales</BaseText>
        </button>
        <button
          type="button"
          className={`border rounded-md flex-1 py-1 ${
            tabSelect === "otros_datos"
              ? "border-blue-500 bg-blue-50 text-blue-500 font-semibold"
              : "bg-gray-50"
          }`}
          onClick={(_) => changeTabSelect("otros_datos")}
        >
          <BaseText size="value">Otros datos</BaseText>
        </button>
      </div>
    </div>
  );
};

const FooterContentForm = ({
  isSendingFormData,
  tabSelect,
  setTabSelect,
  onCancel,
}) => {
  return (
    <div className="px-3 py-4 border-t border-gray-100">
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          className="bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200"
          onClick={onCancel}
        >
          <BaseText size="value" weight="bold">
            Cancelar
          </BaseText>
        </button>
        {tabSelect === "datos_generales" && (
          <button
            type="button"
            className={`px-3 py-2 ${
              isSendingFormData ? "bg-blue-400" : "bg-blue-500"
            } text-white rounded-md hover:bg-blue-400`}
            onClick={() => setTabSelect("otros_datos")}
          >
            {isSendingFormData ? (
              <div className="flex items-center space-x-2">
                <IconSpin className="animate-spin" />
                <BaseText size="value" weight="bold">
                  Creando...
                </BaseText>
              </div>
            ) : (
              <BaseText size="value" weight="bold">
                Siguiente
              </BaseText>
            )}
          </button>
        )}
        {tabSelect === "otros_datos" && (
          <button
            type="submit"
            className={`px-3 py-2 ${
              isSendingFormData ? "bg-blue-400" : "bg-blue-500"
            } text-white rounded-md hover:bg-blue-400`}
          >
            {isSendingFormData ? (
              <div className="flex items-center space-x-2">
                <IconSpin className="animate-spin" />
                <BaseText size="value" weight="bold">
                  Creando...
                </BaseText>
              </div>
            ) : (
              <BaseText size="value" weight="bold">
                Crear cliente
              </BaseText>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

const FormError = ({ error, className }) => {
  if (!error) {
    return null;
  }

  return <div className={`text-red-400 text-sm ${className}`}>{error}</div>;
};

const Input = ({ type = "text", className, hasError, ...otherProps }) => {
  return (
    <input
      type={type}
      className={`border rounded-md px-3 py-2 ${
        hasError ? "border-red-400" : ""
      } ${className}`}
      {...otherProps}
    />
  );
};

const Label = ({ children }) => {
  return (
    <BaseText size="value" className="text-gray-500">
      {children}
    </BaseText>
  );
};

const CustomDataField = ({
  id,
  attribute,
  content,
  placeholderAttribute = "Escriba aqui el atributo",
  placeholderContent = "Escriba aqui el contenido",
  onContentChange,
  onDelete,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-gray-100 rounded-md mt-4 p-4 flex-auto">
        <div className="border-b pb-2">
          <input
            type="text"
            className="w-full focus:outline-none bg-transparent"
            placeholder={placeholderAttribute}
            value={attribute}
            onChange={(e) =>
              onContentChange({ id, attribute: e.target.value, content })
            }
          />
        </div>
        <div className="mt-2 relative">
          {!content && (
            <div className="absolute text-gray-400 top-0 left-0 z-0">
              {placeholderContent}
            </div>
          )}
          <div
            aria-label={placeholderContent}
            className="focus:outline-none relative z-10"
            role="textbox"
            contentEditable
            spellCheck
            dangerouslySetInnerHTML={{ __html: content }}
            onBlur={(e) =>
              onContentChange({ id, attribute, content: e.target.innerText })
            }
          ></div>
        </div>
      </div>
      <div>
        <button type="button" onClick={() => onDelete({ id })}>
          <IconClose size="14" />
        </button>
      </div>
    </div>
  );
};

const IconSpin = ({ size = 20, ...otherProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      {...otherProps}
    >
      <circle
        className="opacity-25"
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export default ButtonCreateClient;
