const Cobros = ({ size = "20px", fill, ...otherProps }) => {
  if (fill) {
    return (
      <svg
        height={size}
        viewBox="0 0 70 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45 9.5V10.9994C53.2463 14.6483 59 22.9022 59 32.5V44.9874C59 47.5627 59.9935 50.0387 61.7736 51.8997L64.6144 54.8696C68.0709 58.4832 70 63.2909 70 68.2913C70 73.6533 65.6533 78 60.2913 78H9.44179C4.22723 78 0 73.7728 0 68.5582C0 63.4106 2.10143 58.4861 5.81793 54.9245L8.91905 51.9526C10.8872 50.0665 12 47.4587 12 44.7327V32.5C12 22.9023 17.7537 14.6483 26 10.9994L26 9.49999C26 4.25329 30.2533 -4.76837e-07 35.5 0C40.7467 4.76837e-07 45 4.2533 45 9.5ZM41 9.5V9.64714C39.2357 9.22407 37.394 9 35.5 9C33.606 9 31.7643 9.22407 30 9.64714V9.5C30 6.46243 32.4624 4 35.5 4C38.5376 4 41 6.46243 41 9.5ZM36 93C42.6274 93 48 87.6274 48 81H23C23 87.6274 28.3726 93 35 93H36Z"
          fill="black"
        />
      </svg>
    );
  }
  return (
    <svg
      height={size}
      viewBox="0 0 70 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45 10.9994V9.5C45 4.2533 40.7467 0 35.5 0C30.2533 0 26 4.25329 26 9.5L26 10.9994C17.7537 14.6483 12 22.9023 12 32.5V44.7327C12 47.4587 10.8872 50.0665 8.91905 51.9526L5.81793 54.9245C2.10143 58.4861 0 63.4106 0 68.5582C0 73.7728 4.22723 78 9.44179 78H22V79.5C22 86.9558 28.0442 93 35.5 93C42.9558 93 49 86.9558 49 79.5V78H60.2913C65.6533 78 70 73.6533 70 68.2913C70 63.2909 68.0709 58.4832 64.6144 54.8696L61.7736 51.8997C59.9935 50.0387 59 47.5627 59 44.9874V32.5C59 22.9023 53.2463 14.6483 45 10.9994ZM41 9.64714V9.5C41 6.46243 38.5376 4 35.5 4C32.4624 4 30 6.46243 30 9.5V9.64714C31.7643 9.22407 33.606 9 35.5 9C37.394 9 39.2357 9.22407 41 9.64714ZM9.44179 74H60.2913C63.4441 74 66 71.4441 66 68.2913C66 64.321 64.4683 60.5037 61.7239 57.6345L58.883 54.6645C56.3909 52.0592 55 48.5928 55 44.9874V32.5C55 21.7304 46.2696 13 35.5 13C24.7304 13 16 21.7304 16 32.5V44.7327C16 48.549 14.442 52.2 11.6867 54.8405L8.58555 57.8124C5.6563 60.6196 4 64.501 4 68.5582C4 71.5636 6.43637 74 9.44179 74ZM26 79.5V78H45V79.5C45 84.7467 40.7467 89 35.5 89C30.2533 89 26 84.7467 26 79.5Z"
        fill="black"
      />
    </svg>
  );
};

export default Cobros;