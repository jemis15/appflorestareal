import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      { children }

      <style global jsx>{`
        :root {
          --sidebar-width: 280px;
        }

        body {
          margin-left: var(--sidebar-width);
          background: rgb(243, 244, 246);
        }
      `}</style>
    </>
  );
}

export default Layout;
