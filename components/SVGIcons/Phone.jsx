const Phone = ({ size = "20px", fill, ...otherProps }) => {
  if (fill) {
    return (
      <svg
        width={size}
        viewBox="0 0 65 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.75 0H42.75V11H30.75V16H53.75V32H12.75V16H25.75V11H13.75V0ZM27.75 23H19.75V25H27.75V23ZM19.75 21H17.75V23V25V27H19.75H27.75H29.75V25V23V21H27.75H19.75ZM1.5317 38.527L10 30.7498V34H56V31.5789L63.2055 38.564C63.2921 38.648 63.3689 38.7361 63.4363 38.8276C64.0836 39.3307 64.5 40.1167 64.5 41V57V58.75H62.75H59.9128V55.25H61V42H3.5V55.25H4.58721V58.75H1.75H0V57V41C0 39.9251 0.616645 38.9943 1.51548 38.542L1.5317 38.527ZM55.75 45H8.75V62H55.75V45ZM32.75 57C34.4069 57 35.75 55.6569 35.75 54C35.75 52.3431 34.4069 51 32.75 51C31.0931 51 29.75 52.3431 29.75 54C29.75 55.6569 31.0931 57 32.75 57Z"
          fill="#2F80ED"
        />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 1.33301C10.8978 1.33301 11.2794 1.49104 11.5607 1.77235C11.842 2.05365 12 2.43518 12 2.83301V13.1663C12 13.5642 11.842 13.9457 11.5607 14.227C11.2794 14.5083 10.8978 14.6663 10.5 14.6663H5.5C5.10218 14.6663 4.72064 14.5083 4.43934 14.227C4.15804 13.9457 4 13.5642 4 13.1663V2.83301C4 2.43518 4.15804 2.05365 4.43934 1.77235C4.72064 1.49104 5.10218 1.33301 5.5 1.33301H10.5ZM10.5 2.33301H5.5C5.36739 2.33301 5.24021 2.38569 5.14645 2.47945C5.05268 2.57322 5 2.7004 5 2.83301V13.1663C5 13.4423 5.224 13.6663 5.5 13.6663H10.5C10.6326 13.6663 10.7598 13.6137 10.8536 13.5199C10.9473 13.4261 11 13.2989 11 13.1663V2.83301C11 2.7004 10.9473 2.57322 10.8536 2.47945C10.7598 2.38569 10.6326 2.33301 10.5 2.33301ZM8.83267 11.6663C8.96527 11.6662 9.09252 11.7187 9.18642 11.8123C9.28031 11.906 9.33316 12.0331 9.33333 12.1657C9.33351 12.2983 9.281 12.4255 9.18736 12.5194C9.09372 12.6133 8.96661 12.6662 8.834 12.6663L7.16733 12.669C7.03473 12.6692 6.90748 12.6167 6.81358 12.523C6.71969 12.4294 6.66684 12.3023 6.66667 12.1697C6.66649 12.0371 6.719 11.9098 6.81264 11.8159C6.90629 11.722 7.03339 11.6692 7.166 11.669L8.83267 11.6663Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Phone;