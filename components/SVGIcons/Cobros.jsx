const Cobros = ({ size = "20px", fill, ...otherProps }) => {
  if (fill) {
    return (
      <svg
        width={size}
        viewBox="0 0 68 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33 0C31.3431 0 30 1.34315 30 3V31C30 31.814 30.3242 32.5523 30.8506 33.0928C31.715 33.9805 33.0961 33.5727 34.1742 32.9619C38.6196 30.4436 43.7956 29 49.3203 29C53.5786 29 57.6297 29.8576 61.2988 31.404C61.6239 31.541 62 31.3528 62 31V3C62 1.34315 60.6569 0 59 0H33ZM21.7442 5.76108C23.7429 4.52701 26.3203 5.96474 26.3203 8.31371V36.0825C26.3203 39.0057 22.5655 40.2026 20.8738 37.8187L7.1714 18.5104C6.16881 17.0976 6.5678 15.1317 8.04184 14.2215L21.7442 5.76108ZM9.13558 27.8702C7.73606 25.6714 4.39124 26.1804 3.70923 28.6961L0.10527 41.9896C-0.328263 43.5888 0.616639 45.2366 2.21577 45.6701L16.7966 49.6231C19.4412 50.34 21.5837 47.4283 20.1125 45.1168L9.13558 27.8702ZM50.2988 20.4395H48.1992L53.4336 5H55.5332L50.2988 20.4395ZM43.9688 16.4883C43.9688 15.9349 43.7734 15.5117 43.3828 15.2188C42.9922 14.9193 42.2891 14.6068 41.2734 14.2812C40.2578 13.9492 39.4538 13.6237 38.8613 13.3047C37.2467 12.4323 36.4395 11.2572 36.4395 9.7793C36.4395 9.01107 36.6543 8.32747 37.084 7.72852C37.5202 7.12305 38.1419 6.65104 38.9492 6.3125C39.763 5.97396 40.6745 5.80469 41.6836 5.80469C42.6992 5.80469 43.6042 5.99023 44.3984 6.36133C45.1927 6.72591 45.8079 7.24349 46.2441 7.91406C46.6868 8.58464 46.9082 9.34635 46.9082 10.1992H43.9785C43.9785 9.54818 43.7734 9.04362 43.3633 8.68555C42.9531 8.32096 42.377 8.13867 41.6348 8.13867C40.9186 8.13867 40.362 8.29167 39.9648 8.59766C39.5677 8.89714 39.3691 9.29427 39.3691 9.78906C39.3691 10.2513 39.6003 10.6387 40.0625 10.9512C40.5312 11.2637 41.2181 11.5566 42.123 11.8301C43.7897 12.3314 45.0039 12.9531 45.7656 13.6953C46.5273 14.4375 46.9082 15.362 46.9082 16.4688C46.9082 17.6992 46.4427 18.666 45.5117 19.3691C44.5807 20.0658 43.3275 20.4141 41.752 20.4141C40.6582 20.4141 39.6621 20.2155 38.7637 19.8184C37.8652 19.4147 37.1784 18.8646 36.7031 18.168C36.2344 17.4714 36 16.6641 36 15.7461H38.9395C38.9395 17.3151 39.877 18.0996 41.752 18.0996C42.4486 18.0996 42.9922 17.9596 43.3828 17.6797C43.7734 17.3932 43.9688 16.9961 43.9688 16.4883ZM54.0059 17.7383C53.7064 18.0182 53.5566 18.3828 53.5566 18.832C53.5566 19.2747 53.7064 19.6361 54.0059 19.916C54.3053 20.1895 54.6862 20.3262 55.1484 20.3262C55.6172 20.3262 56.0013 20.1895 56.3008 19.916C56.6003 19.6361 56.75 19.2747 56.75 18.832C56.75 18.3828 56.597 18.0182 56.291 17.7383C55.9915 17.4583 55.6107 17.3184 55.1484 17.3184C54.6927 17.3184 54.3119 17.4583 54.0059 17.7383ZM65.8746 48.6491C67.0953 48.4374 67.9284 47.2686 67.5482 46.0894C66.5769 43.0774 64.7276 40.4034 62.214 38.4257C59.1094 35.9829 55.2108 34.775 51.2689 35.0346C47.327 35.2942 43.6205 37.0029 40.863 39.8317C38.7295 42.0205 37.2808 44.7601 36.6609 47.7162L34.3848 44.84C33.6994 43.9738 32.4415 43.8273 31.5754 44.5127C30.7092 45.1982 30.5627 46.456 31.2481 47.3221L36.2125 53.5955C37.2406 54.8948 39.1274 55.1146 40.4266 54.0864L46.7 49.1221C47.5662 48.4366 47.7127 47.1788 47.0272 46.3126C46.3418 45.4465 45.084 45.2999 44.2178 45.9854L41.0846 48.4648C41.0988 48.4164 41.1118 48.3676 41.1236 48.3184C41.6038 46.3133 42.6175 44.4596 44.0758 42.9635C46.0601 40.9279 48.7272 39.6983 51.5637 39.5115C54.4003 39.3247 57.2056 40.1939 59.4397 41.9517C61.0816 43.2436 62.3296 44.9484 63.0687 46.8733C63.5128 48.0299 64.6539 48.8609 65.8746 48.6491Z"
          fill="#2F80ED"
        />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      viewBox="0 0 67 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.1174 32.9942C33.8424 32.5814 34.3203 31.8198 34.3203 30.9854V10C34.3203 7.23858 36.5589 5 39.3203 5H51.3203C54.0817 5 56.3203 7.23857 56.3203 10V28.2917C56.3203 29.3242 57.0297 30.2227 58.0102 30.5461C59.5929 31.0679 61.3203 29.9484 61.3203 28.2818V3C61.3203 1.34315 59.9772 0 58.3203 0H32.3203C30.6635 0 29.3203 1.34315 29.3203 3V30.9636C29.3203 32.8211 31.5032 33.9132 33.1174 32.9942ZM24.1357 40.8372C24.9211 39.8049 25.0338 38.3858 24.3179 37.3042L13.9054 21.5742C12.9909 20.1926 13.3695 18.3312 14.7511 17.4167L25.2002 10.4999C25.8997 10.0369 26.3203 9.25399 26.3203 8.41521C26.3203 6.42217 24.1023 5.23045 22.4404 6.33055L9.48961 14.9033L7.82189 16.0072C6.4403 16.9218 6.06168 18.7831 6.97622 20.1647L8.08017 21.8325L21.7356 42.4617C22.0663 42.9612 22.7573 42.8028 23.0897 42.3045C23.4231 41.8046 23.772 41.3153 24.1357 40.8372ZM20.0409 48.2964C20.3544 47.4426 20.2284 46.3729 19.3505 46.1349L8.34987 43.1526C6.75074 42.7191 5.80584 41.0713 6.23937 39.4721L8.83136 29.9113C9.01534 29.2327 8.90504 28.508 8.52751 27.9148C7.36125 26.0825 4.5739 26.5067 4.00556 28.603L0.628591 41.0593L0.10527 42.9896C-0.328263 44.5888 0.616639 46.2366 2.21577 46.6701L4.14609 47.1934L18.0422 50.9608C18.7313 51.1476 19.3061 50.5644 19.512 49.8807C19.673 49.3461 19.8494 48.8178 20.0409 48.2964ZM64.8746 48.6491C66.0954 48.4374 66.9284 47.2686 66.5482 46.0894C65.5769 43.0774 63.7276 40.4034 61.2141 38.4257C58.1094 35.9829 54.2108 34.775 50.2689 35.0346C46.327 35.2942 42.6205 37.0029 39.863 39.8317C37.7295 42.0205 36.2808 44.7601 35.6609 47.7162L33.3848 44.84C32.6994 43.9738 31.4416 43.8273 30.5754 44.5127C29.7092 45.1982 29.5627 46.456 30.2481 47.3222L35.2125 53.5955C36.2406 54.8948 38.1274 55.1146 39.4266 54.0864L45.7 49.1221C46.5662 48.4366 46.7127 47.1788 46.0273 46.3126C45.3418 45.4465 44.084 45.2999 43.2178 45.9854L40.0846 48.4648C40.0988 48.4164 40.1118 48.3676 40.1236 48.3185C40.6038 46.3133 41.6175 44.4596 43.0758 42.9635C45.0601 40.9279 47.7272 39.6983 50.5638 39.5115C53.4003 39.3248 56.2056 40.1939 58.4397 41.9517C60.0816 43.2436 61.3296 44.9484 62.0687 46.8733C62.5128 48.0299 63.6539 48.8609 64.8746 48.6491Z"
        fill="black"
      />
    </svg>
  );
};

export default Cobros;
