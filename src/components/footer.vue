<script setup>
import Modal from './ui/modal.vue';
import Form from './ui/form.vue';

const props = defineProps(['CONTACTS_DATA']);
</script>

<template>
   <footer id="contacts">
      <div class="content-wrapper flex flex-col">
         <div class="footer-block footer-info_wrap" v-if="CONTACTS_DATA">
            <div class="footer-info">
               <div class="footer-info_contacts">
                  <a :href="`tel:${CONTACTS_DATA.data.PHONE_COMPANY}`" class="text-46 text-white footer-link block">{{ CONTACTS_DATA.data.PHONE_COMPANY }}</a>
                  <a :href="`mailto:${CONTACTS_DATA.data.EMAIL_COMPANY}`" class="text-46 text-white footer-link block">{{ CONTACTS_DATA.data.EMAIL_COMPANY }}</a>
               </div>
               <div class="footer-info_requisites">
                  <div class="requisites-wrap">
                     <ul class="requisites-1">
                        <li>
                           <h4 class="text-16 text-white font-bold">ИНН:</h4>
                           <p class="text-16 text-white">{{ CONTACTS_DATA.data.INN_COMPANY }}</p>
                        </li>
                        <li>
                           <h4 class="text-16 text-white font-bold">КПП:</h4>
                           <p class="text-16 text-white">{{ CONTACTS_DATA.data.KPP_COMPANY }}</p>
                        </li>
                        <li>
                           <h4 class="text-16 text-white font-bold">ОГРН:</h4>
                           <p class="text-16 text-white">{{ CONTACTS_DATA.data.OGR_COMPANY }}</p>
                        </li>
                        <li>
                           <h4 class="text-16 text-white font-bold">ОКПО:</h4>
                           <p class="text-16 text-white">{{ CONTACTS_DATA.data.OKPO_COMPANY }}</p>
                        </li>
                        <li>
                           <h4 class="text-16 text-white font-bold">Расчетный счет №:</h4>
                           <p class="text-16 text-white">{{ CONTACTS_DATA.data.RAS_SCHET_COMPANY }}</p>
                        </li>
                     </ul>
                     <ul class="requisites-2">
                        <li>
                           <h4 class="text-16 text-white font-bold">Банк:</h4>
                           <p class="text-16 text-white">{{ CONTACTS_DATA.data.BANK_COMPANY }}</p>
                        </li>
                        <li>
                           <h4 class="text-16 text-white font-bold">Корсчет банка №:</h4>
                           <p class="text-16 text-white">{{ CONTACTS_DATA.data.COR_SCHET_COMPANY }}</p>
                        </li>
                        <li>
                           <h4 class="text-16 text-white font-bold">БИК:</h4>
                           <p class="text-16 text-white">{{ CONTACTS_DATA.data.BIK_COMPANY }}</p>
                        </li>
                        <li>
                           <h4 class="text-16 text-white font-bold">Генеральный директор:</h4>
                           <p class="text-16 text-white">{{ CONTACTS_DATA.data.GEN_DIR_COMPANY }}</p>
                        </li>
                        <li>
                           <h4 class="text-16 text-white font-bold">Телефон организации:</h4>
                           <a :href="`tel:${CONTACTS_DATA.data.PHONE_ORG_COMPANY}`" class="text-16 text-white">{{ CONTACTS_DATA.data.PHONE_ORG_COMPANY }}</a>
                        </li>
                     </ul>
                  </div>
                  <ul class="requisites-3">
                     <li>
                        <h4 class="text-16 text-white font-bold">ОКВЭД:</h4>
                        <p class="text-16 text-white">{{ CONTACTS_DATA.data.OKWED_COMPANY }}</p>
                     </li>
                     <li>
                        <h4 class="text-16 text-white font-bold">Юридический и почтовый адрес организации:</h4>
                        <p class="text-16 text-white">{{ CONTACTS_DATA.data.UR_ADDRESS_COMPANY }}</p>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="footer-map">
               <div class="footer-map-wrap">
                  <iframe src="https://yandex.ru/map-widget/v1/org/modifikat/74428691836/?ll=38.964048%2C55.824086&z=16" width="100%" height="100%" frameborder="1" allowfullscreen="true" style="position: relative"></iframe>
               </div>
               <a class="text-46nn text-white footer-link" :href="CONTACTS_DATA.data.ADDRESS_YAMAP_LINK">{{ CONTACTS_DATA.data.ADDRESS_MAP_COMPANY }}</a>
            </div>
         </div>
         <div class="footer-block">
            <Modal buttonLarge="true" buttonTitle="Получить консультацию" buttonPinkStyle="true" :showOpenButton="true"><Form checkId="1333481" canShowSuccess="true">Получить консультацию</Form></Modal>
         </div>
         <div class="footer-block footer-copy_wrap">
            <div class="footer-copy">
               <p class="text-16 text-white">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «МОДИФИКАТ» © {{ new Date().getFullYear() }}</p>
               <a class="text-16 text-white footer-link link-bottom_line" href="/politics">Политика конфиденциальности</a>
               <a href="https://buroburakova.ru" class="made-by-BuroBurakova">
                  <p class="text-16 text-white">Сайт разработан:</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="161" height="31" viewBox="0 0 161 31" fill="none">
                     <path
                        d="M40.8577 11.0304H36.343V13.4085H37.8482C39.1225 13.4085 40.1378 13.7662 40.8926 14.4824C41.6481 15.1979 42.0259 16.1551 42.0259 17.3525C42.0259 18.5499 41.6566 19.5097 40.9189 20.2486C40.1803 20.9875 39.2031 21.3679 37.9866 21.3906H33.791V8.93457H40.8577V11.0304ZM36.343 15.4968V19.304H37.883C38.3788 19.304 38.7693 19.1201 39.0554 18.7523C39.3407 18.3845 39.4833 17.9126 39.4833 17.3366C39.4833 16.795 39.3432 16.3541 39.0639 16.0149C38.7837 15.6756 38.3966 15.5035 37.9008 15.4976H36.3438L36.343 15.4968Z"
                        fill="white"
                     />
                     <path
                        d="M56.1585 16.2831C56.1585 17.9541 55.7595 19.2515 54.9606 20.176C54.1617 21.0996 53.053 21.5623 51.6344 21.5623C50.2158 21.5623 49.1393 21.1173 48.3345 20.228C47.5297 19.3379 47.1103 18.0776 47.0763 16.4469H46.0644V21.3918H43.5217V8.93413H46.0644V14.4266H47.0763V14.1957C47.0763 13.0721 47.2563 12.1015 47.6171 11.2828C47.9771 10.4641 48.5009 9.84016 49.1868 9.4094C49.8728 8.97863 50.6835 8.76367 51.6174 8.76367C53.019 8.76367 54.1227 9.23558 54.93 10.1794C55.7374 11.1232 56.1466 12.4483 56.1585 14.1537V16.284V16.2831ZM53.6065 14.1957C53.6065 13.0721 53.4452 12.2366 53.1217 11.6892C52.7983 11.1417 52.2974 10.8679 51.6165 10.8679C50.9357 10.8679 50.4433 11.1316 50.1198 11.6589C49.7972 12.1863 49.63 12.989 49.6181 14.0672V16.2831C49.6181 17.3722 49.7828 18.175 50.1113 18.6914C50.4399 19.2078 50.9476 19.4656 51.6335 19.4656C52.3195 19.4656 52.7898 19.2137 53.1124 18.7082C53.435 18.2035 53.5997 17.4209 53.6057 16.3595V14.1948L53.6065 14.1957Z"
                        fill="white"
                     />
                     <path
                        d="M60.4755 17.0108V21.3914H57.9329V8.93457H62.2235C63.4689 8.93457 64.4622 9.31663 65.2033 10.0808C65.9445 10.8449 66.3146 11.8374 66.3146 13.0583C66.3146 14.2792 65.9487 15.2432 65.2161 15.9502C64.4834 16.6572 63.4689 17.0108 62.1717 17.0108H60.4763H60.4755ZM60.4755 14.9149H62.2226C62.7074 14.9149 63.0818 14.7579 63.3475 14.4446C63.6124 14.1314 63.7457 13.6746 63.7457 13.0759C63.7457 12.4772 63.6098 11.9592 63.339 11.5914C63.0682 11.2236 62.7049 11.0372 62.249 11.0313H60.4755V14.9157V14.9149Z"
                        fill="white"
                     />
                     <path
                        d="M76.8748 16.2831C76.8748 17.9541 76.4757 19.2515 75.6769 20.176C74.878 21.0996 73.7693 21.5623 72.3506 21.5623C70.932 21.5623 69.8275 21.1047 69.0202 20.1894C68.2128 19.2741 67.8036 17.9919 67.7917 16.3436V14.2133C67.7917 12.502 68.1925 11.166 68.9939 10.2054C69.7953 9.24482 70.9083 8.76367 72.3328 8.76367C73.7574 8.76367 74.8381 9.23558 75.6455 10.1794C76.4528 11.1232 76.862 12.4483 76.8739 14.1537V16.284L76.8748 16.2831ZM74.3228 14.1957C74.3228 13.0721 74.1615 12.2366 73.838 11.6892C73.5154 11.1417 73.0137 10.8679 72.3328 10.8679C71.652 10.8679 71.1596 11.1316 70.8361 11.6589C70.5127 12.1863 70.3463 12.989 70.3344 14.0672V16.2831C70.3344 17.3722 70.4991 18.175 70.8276 18.6914C71.1562 19.2078 71.6638 19.4656 72.3498 19.4656C73.0358 19.4656 73.5061 19.2137 73.8287 18.7082C74.1513 18.2035 74.316 17.4209 74.3219 16.3595V14.1948L74.3228 14.1957Z"
                        fill="white"
                     />
                     <path
                        d="M89.841 11.0304H85.3254V13.4085H86.8306C88.1049 13.4085 89.1194 13.7662 89.875 14.4824C90.6305 15.1979 91.0083 16.1551 91.0083 17.3525C91.0083 18.5499 90.639 19.5097 89.9013 20.2486C89.1627 20.9875 88.1856 21.3679 86.969 21.3906H82.7734V8.93457H89.8402V11.0304H89.841ZM85.3254 15.4968V19.304H86.8654C87.3612 19.304 87.7517 19.1201 88.037 18.7523C88.3222 18.3845 88.4649 17.9126 88.4649 17.3366C88.4649 16.795 88.3248 16.3541 88.0455 16.0149C87.7653 15.6756 87.3782 15.5035 86.8824 15.4976H85.3254V15.4968Z"
                        fill="white"
                     />
                     <path
                        d="M96.2769 14.4698L97.9723 8.93457H100.706L97.2549 18.9446C96.8627 19.9371 96.4407 20.6189 95.9874 20.9892C95.5349 21.3604 94.9916 21.5535 94.3565 21.5711H94.0798L93.4745 21.5367L93.4312 19.4492C93.4889 19.4719 93.6765 19.4837 93.9932 19.4837C94.3099 19.4837 94.5595 19.4123 94.7241 19.2695C94.8888 19.1268 95.0315 18.8077 95.152 18.3114L95.2734 17.858L91.6755 8.93457H94.3998L96.2769 14.4698Z"
                        fill="white"
                     />
                     <path
                        d="M104.598 17.0108V21.3914H102.055V8.93457H106.346C107.591 8.93457 108.584 9.31663 109.325 10.0808C110.067 10.8449 110.437 11.8374 110.437 13.0583C110.437 14.2792 110.071 15.2432 109.338 15.9502C108.605 16.6572 107.591 17.0108 106.294 17.0108H104.598H104.598ZM104.598 14.9149H106.345C106.829 14.9149 107.204 14.7579 107.47 14.4446C107.734 14.1314 107.868 13.6746 107.868 13.0759C107.868 12.4772 107.732 11.9592 107.461 11.5914C107.19 11.2236 106.827 11.0372 106.371 11.0313H104.598V14.9157V14.9149Z"
                        fill="white"
                     />
                     <path d="M116.603 18.8421H113.135L112.46 21.3914H109.769L113.705 8.93457H116.032L119.993 21.3914H117.277L116.603 18.8421H116.603ZM113.688 16.7462H116.041L114.864 12.3059L113.687 16.7462H113.688Z" fill="white" />
                     <path d="M124.838 16.3096H123.731V21.3914H121.189V8.93457H123.731V13.914H124.588L126.777 8.93457H129.874L126.794 14.7352L130.22 21.3914H127.193L124.84 16.3096H124.838Z" fill="white" />
                     <path
                        d="M139.759 16.2831C139.759 17.9541 139.36 19.2515 138.561 20.176C137.762 21.0996 136.653 21.5623 135.235 21.5623C133.816 21.5623 132.712 21.1047 131.904 20.1894C131.097 19.2741 130.688 17.9919 130.676 16.3436V14.2133C130.676 12.502 131.076 11.166 131.878 10.2054C132.679 9.24482 133.792 8.76367 135.217 8.76367C136.641 8.76367 137.722 9.23558 138.529 10.1794C139.337 11.1232 139.746 12.4483 139.758 14.1537V16.284L139.759 16.2831ZM137.207 14.1957C137.207 13.0721 137.046 12.2366 136.722 11.6892C136.399 11.1417 135.898 10.8679 135.217 10.8679C134.536 10.8679 134.044 11.1316 133.72 11.6589C133.398 12.1863 133.23 12.989 133.218 14.0672V16.2831C133.218 17.3722 133.383 18.175 133.712 18.6914C134.04 19.2078 134.548 19.4656 135.234 19.4656C135.92 19.4656 136.39 19.2137 136.713 18.7082C137.035 18.2035 137.2 17.4209 137.206 16.3595V14.1948L137.207 14.1957Z"
                        fill="white"
                     />
                     <path
                        d="M141.584 21.3914V8.93457H145.477C146.792 8.93457 147.79 9.22426 148.473 9.80281C149.157 10.3814 149.498 11.2303 149.498 12.3479C149.498 12.9811 149.356 13.526 149.074 13.982C148.792 14.4388 148.405 14.7721 147.916 14.9829C148.481 15.1424 148.916 15.4632 149.221 15.9452C149.527 16.4272 149.68 17.0217 149.68 17.7287C149.68 18.9379 149.344 19.8506 148.672 20.4661C148.001 21.0824 147.027 21.3898 145.752 21.3898H141.583L141.584 21.3914ZM144.127 14.1449H145.45C146.448 14.1449 146.947 13.6343 146.947 12.6133C146.947 12.049 146.832 11.6434 146.601 11.3982C146.37 11.153 145.995 11.0304 145.476 11.0304H144.127V14.1449ZM144.127 15.9754V19.3031H145.753C146.209 19.3031 146.555 19.1637 146.792 18.8841C147.028 18.6045 147.146 18.2082 147.146 17.6951C147.146 16.5775 146.737 16.004 145.918 15.9754H144.128H144.127Z"
                        fill="white"
                     />
                     <path d="M157.534 18.8421H154.065L153.391 21.3914H150.7L154.636 8.93457H156.963L160.924 21.3914H158.208L157.533 18.8421H157.534ZM154.619 16.7462H156.971L155.795 12.3059L154.618 16.7462H154.619Z" fill="white" />
                     <path
                        d="M6.20052 5.62816C6.20052 5.62816 7.95616 6.99686 8.5776 10.4354C9.19904 13.874 3.62732 17.9171 3.62732 17.9171C3.62732 17.9171 5.16988 15.8204 4.01954 13.7153C2.8692 11.6101 0.611824 7.8777 0.684834 6.56525C0.757845 5.25281 1.82414 2.93945 1.82414 2.93945L6.27353 3.23167L6.19967 5.62816H6.20052Z"
                        fill="url(#paint0_linear_258_1529)"
                     />
                     <path d="M21.9165 14.7764C21.9165 14.7764 13.8293 22.3907 5.86015 24.3279C-2.10902 26.2651 8.188 30.0177 8.188 30.0177C8.188 30.0177 18.9834 26.3742 24.398 20.5148C29.8127 14.6555 21.9165 14.7772 21.9165 14.7772V14.7764Z" fill="url(#paint1_linear_258_1529)" />
                     <path
                        d="M0.993073 7.95804C0.993073 7.95804 0.0430887 3.89475 4.16308 5.15682C8.28223 6.41888 21.5387 12.4403 23.7766 18.6549C23.7766 18.6549 24.2265 20.3385 23.4675 21.4511C23.4675 21.4511 29.6081 17.6506 27.5273 13.4648C25.4473 9.27888 11.1322 0.188342 7.14717 0.00948716C3.16216 -0.170208 -1.73887 2.19269 0.993073 7.95804Z"
                        fill="url(#paint2_linear_258_1529)"
                     />
                     <path
                        d="M7.92318 8.23535C7.92318 8.23535 11.1322 13.423 11.2248 14.3131C11.3173 15.2031 11.2952 16.5525 9.22208 19.787C7.14893 23.0207 3.16986 27.6835 7.78564 29.6283C7.78564 29.6283 8.70761 29.9163 9.57864 29.5073C9.57864 29.5073 5.54185 31.5234 2.26826 29.221C-1.00532 26.9186 -0.428028 23.9939 2.04838 19.9869C4.5248 15.979 8.92664 9.79047 7.92233 8.23535H7.92318Z"
                        fill="url(#paint3_linear_258_1529)"
                     />
                     <defs>
                        <linearGradient id="paint0_linear_258_1529" x1="0.297325" y1="10.0725" x2="8.64851" y2="10.9942" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#4395D1" />
                           <stop offset="1" stop-color="#2B2E6F" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_258_1529" x1="3.40105" y1="21.112" x2="25.5961" y2="23.5616" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#4395D1" />
                           <stop offset="1" stop-color="#2B2E6F" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_258_1529" x1="-0.285027" y1="9.043" x2="28.3214" y2="12.2003" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#AA173B" />
                           <stop offset="0.58" stop-color="#E42918" />
                           <stop offset="1" stop-color="#E42918" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_258_1529" x1="0.7191" y1="18.6324" x2="10.7358" y2="19.7379" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#F5E2E5" />
                           <stop offset="1" stop-color="#D8E3F4" />
                        </linearGradient>
                     </defs>
                  </svg>
               </a>
            </div>
            <svg class="logo-vector" xmlns="http://www.w3.org/2000/svg" width="1889" height="267" viewBox="0 0 1889 267" fill="none">
               <path
                  d="M1801.63 225C1799.63 225 1797.93 224.4 1796.53 223.2C1795.33 221.8 1794.73 220.1 1794.73 218.1V41.7H1737.13C1735.13 41.7 1733.43 41.1 1732.03 39.9C1730.83 38.5 1730.23 36.8 1730.23 34.8V22.2C1730.23 20 1730.83 18.3 1732.03 17.1C1733.43 15.7 1735.13 15 1737.13 15H1881.73C1883.93 15 1885.63 15.7 1886.83 17.1C1888.23 18.3 1888.93 20 1888.93 22.2V34.8C1888.93 36.8 1888.23 38.5 1886.83 39.9C1885.63 41.1 1883.93 41.7 1881.73 41.7H1824.43V218.1C1824.43 220.1 1823.73 221.8 1822.33 223.2C1821.13 224.4 1819.43 225 1817.23 225H1801.63Z"
                  fill="white"
               />
               <path
                  d="M1533.75 225C1532.15 225 1530.75 224.4 1529.55 223.2C1528.35 222 1527.75 220.6 1527.75 219C1527.75 218 1527.85 216.9 1528.05 215.7L1602.45 21.6C1603.25 19.6 1604.35 18 1605.75 16.8C1607.15 15.6 1609.25 15 1612.05 15H1632.45C1635.05 15 1637.05 15.6 1638.45 16.8C1640.05 18 1641.25 19.6 1642.05 21.6L1716.15 215.7C1716.55 216.9 1716.75 218 1716.75 219C1716.75 220.6 1716.15 222 1714.95 223.2C1713.75 224.4 1712.35 225 1710.75 225H1695.45C1693.05 225 1691.25 224.4 1690.05 223.2C1689.05 222 1688.35 220.9 1687.95 219.9L1671.45 177.3H1573.05L1556.55 219.9C1556.35 220.9 1555.65 222 1554.45 223.2C1553.25 224.4 1551.45 225 1549.05 225H1533.75ZM1581.75 151.5H1662.75L1622.25 45L1581.75 151.5Z"
                  fill="white"
               />
               <path
                  d="M1362.86 225C1360.66 225 1358.96 224.4 1357.76 223.2C1356.56 221.8 1355.96 220.1 1355.96 218.1V22.2C1355.96 20 1356.56 18.3 1357.76 17.1C1358.96 15.7 1360.66 15 1362.86 15H1378.16C1380.36 15 1382.06 15.7 1383.26 17.1C1384.66 18.3 1385.36 20 1385.36 22.2V105H1419.26L1472.66 19.8C1473.66 18.2 1474.96 17 1476.56 16.2C1478.16 15.4 1480.26 15 1482.86 15H1499.06C1501.26 15 1502.86 15.6 1503.86 16.8C1504.86 18 1505.36 19.4 1505.36 21C1505.36 22.2 1504.86 23.5 1503.86 24.9L1446.26 116.7L1509.56 214.5C1510.16 215.3 1510.46 216.4 1510.46 217.8C1510.46 219.8 1509.76 221.5 1508.36 222.9C1507.16 224.3 1505.56 225 1503.56 225H1486.46C1484.26 225 1482.56 224.6 1481.36 223.8C1480.36 222.8 1479.46 221.7 1478.66 220.5L1420.46 132H1385.36V218.1C1385.36 220.1 1384.66 221.8 1383.26 223.2C1382.06 224.4 1380.36 225 1378.16 225H1362.86Z"
                  fill="white"
               />
               <path
                  d="M1140.2 225C1138 225 1136.3 224.3 1135.1 222.9C1133.9 221.5 1133.3 219.8 1133.3 217.8V22.2C1133.3 20 1133.9 18.3 1135.1 17.1C1136.5 15.7 1138.2 15 1140.2 15H1155.8C1157.8 15 1159.4 15.7 1160.6 17.1C1162 18.3 1162.7 20 1162.7 22.2V177.3L1274.6 19.2C1275.2 18.4 1276 17.5 1277 16.5C1278.2 15.5 1279.9 15 1282.1 15H1296.8C1298.8 15 1300.4 15.7 1301.6 17.1C1303 18.3 1303.7 20 1303.7 22.2V218.1C1303.7 220.1 1303 221.8 1301.6 223.2C1300.4 224.4 1298.8 225 1296.8 225H1281.5C1279.5 225 1277.8 224.4 1276.4 223.2C1275 221.8 1274.3 220.1 1274.3 218.1V64.2L1162.7 220.8C1162.3 221.4 1161.5 222.3 1160.3 223.5C1159.1 224.5 1157.4 225 1155.2 225H1140.2Z"
                  fill="white"
               />
               <path
                  d="M970.87 234.6C968.87 234.6 967.17 233.9 965.77 232.5C964.57 231.3 963.97 229.7 963.97 227.7V204C934.37 204 911.67 197.6 895.87 184.8C880.27 171.8 871.17 152.3 868.57 126.3C868.57 124.1 868.47 121.8 868.27 119.4C868.27 117 868.27 114.6 868.27 112.2C868.47 109.8 868.57 107.5 868.57 105.3C869.57 87.9 873.97 73.5 881.77 62.1C889.77 50.5 900.77 41.9 914.77 36.3C928.77 30.5 945.17 27.6 963.97 27.6V6.9C963.97 4.9 964.57 3.30001 965.77 2.10001C967.17 0.700004 968.87 0 970.87 0H986.47C988.47 0 990.07 0.700004 991.27 2.10001C992.67 3.30001 993.37 4.9 993.37 6.9V27.6C1012.17 27.6 1028.57 30.5 1042.57 36.3C1056.57 41.9 1067.57 50.5 1075.57 62.1C1083.57 73.5 1087.97 87.9 1088.77 105.3C1088.97 109.1 1089.07 112.6 1089.07 115.8C1089.27 118.8 1089.17 122.3 1088.77 126.3C1086.37 152.3 1077.27 171.8 1061.47 184.8C1045.87 197.6 1023.17 204 993.37 204V227.7C993.37 229.7 992.67 231.3 991.27 232.5C990.07 233.9 988.47 234.6 986.47 234.6H970.87ZM963.97 178.2V53.1C944.37 53.1 928.97 57.3 917.77 65.7C906.77 74.1 900.37 87.8 898.57 106.8C898.37 110 898.27 113 898.27 115.8C898.27 118.4 898.37 121.4 898.57 124.8C899.57 143.6 905.77 157.2 917.17 165.6C928.57 174 944.17 178.2 963.97 178.2ZM993.37 178.2C1013.17 178.2 1028.77 174 1040.17 165.6C1051.57 157.2 1057.77 143.6 1058.77 124.8C1058.97 122.8 1059.07 120.8 1059.07 118.8C1059.07 116.8 1059.07 114.8 1059.07 112.8C1059.07 110.6 1058.97 108.6 1058.77 106.8C1056.77 87.8 1050.27 74.1 1039.27 65.7C1028.27 57.3 1012.97 53.1 993.37 53.1V178.2Z"
                  fill="white"
               />
               <path
                  d="M660.613 225C658.413 225 656.713 224.3 655.513 222.9C654.313 221.5 653.713 219.8 653.713 217.8V22.2C653.713 20 654.313 18.3 655.513 17.1C656.913 15.7 658.613 15 660.613 15H676.213C678.213 15 679.813 15.7 681.013 17.1C682.413 18.3 683.113 20 683.113 22.2V177.3L795.013 19.2C795.613 18.4 796.413 17.5 797.413 16.5C798.613 15.5 800.313 15 802.513 15H817.213C819.213 15 820.813 15.7 822.013 17.1C823.413 18.3 824.113 20 824.113 22.2V218.1C824.113 220.1 823.413 221.8 822.013 223.2C820.813 224.4 819.213 225 817.213 225H801.913C799.913 225 798.213 224.4 796.813 223.2C795.413 221.8 794.713 220.1 794.713 218.1V64.2L683.113 220.8C682.713 221.4 681.913 222.3 680.713 223.5C679.513 224.5 677.813 225 675.613 225H660.613Z"
                  fill="white"
               />
               <path
                  d="M429.011 266.7C427.011 266.7 425.311 266.1 423.911 264.9C422.711 263.7 422.111 262 422.111 259.8V204.9C422.111 202.9 422.711 201.3 423.911 200.1C425.311 198.7 427.011 198 429.011 198H435.311C440.111 198 444.311 195.8 447.911 191.4C451.511 187 454.511 180.3 456.911 171.3C459.511 162.1 461.411 150.5 462.611 136.5C463.811 122.5 464.411 105.9 464.411 86.7V21.9C464.411 19.9 465.011 18.3 466.211 17.1C467.611 15.7 469.311 15 471.311 15H588.311C590.511 15 592.211 15.7 593.411 17.1C594.811 18.3 595.511 20 595.511 22.2V198H610.211C612.411 198 614.111 198.7 615.311 200.1C616.711 201.3 617.411 202.9 617.411 204.9V259.8C617.411 261.8 616.711 263.4 615.311 264.6C614.111 266 612.411 266.7 610.211 266.7H594.911C592.711 266.7 591.011 266 589.811 264.6C588.611 263.4 588.011 261.8 588.011 259.8V225H451.511V259.8C451.511 261.8 450.811 263.4 449.411 264.6C448.211 266 446.511 266.7 444.311 266.7H429.011ZM473.711 198H566.111V42H493.211V90.3C493.211 118.7 491.511 141.6 488.111 159C484.911 176.4 480.111 189.4 473.711 198Z"
                  fill="white"
               />
               <path
                  d="M313.584 228C296.584 228 281.984 225.1 269.784 219.3C257.584 213.3 248.184 204.2 241.584 192C234.984 179.6 231.284 164.1 230.484 145.5C230.284 136.7 230.184 128.3 230.184 120.3C230.184 112.1 230.284 103.6 230.484 94.8C231.284 76.4 235.084 61.1 241.884 48.9C248.884 36.5 258.484 27.3 270.684 21.3C283.084 15.1 297.384 12 313.584 12C329.984 12 344.284 15.1 356.484 21.3C368.884 27.3 378.584 36.5 385.584 48.9C392.584 61.1 396.384 76.4 396.984 94.8C397.384 103.6 397.584 112.1 397.584 120.3C397.584 128.3 397.384 136.7 396.984 145.5C396.384 164.1 392.684 179.6 385.884 192C379.284 204.2 369.884 213.3 357.684 219.3C345.484 225.1 330.784 228 313.584 228ZM313.584 202.5C328.984 202.5 341.484 197.9 351.084 188.7C360.884 179.5 366.184 164.6 366.984 144C367.384 135 367.584 127 367.584 120C367.584 112.8 367.384 104.8 366.984 96C366.584 82.2 363.984 71 359.184 62.4C354.584 53.8 348.384 47.5 340.584 43.5C332.784 39.5 323.784 37.5 313.584 37.5C303.784 37.5 294.984 39.5 287.184 43.5C279.384 47.5 273.084 53.8 268.284 62.4C263.684 71 261.084 82.2 260.484 96C260.284 104.8 260.184 112.8 260.184 120C260.184 127 260.284 135 260.484 144C261.284 164.6 266.584 179.5 276.384 188.7C286.184 197.9 298.584 202.5 313.584 202.5Z"
                  fill="white"
               />
               <path
                  d="M6.99998 225C4.99998 225 3.29997 224.4 1.89997 223.2C0.699975 221.8 0.0999756 220.1 0.0999756 218.1V22.2C0.0999756 20 0.699975 18.3 1.89997 17.1C3.29997 15.7 4.99998 15 6.99998 15H22C24.4 15 26.2 15.6 27.4 16.8C28.6 18 29.3 19 29.5 19.8L93.1 141L157 19.8C157.4 19 158.1 18 159.1 16.8C160.3 15.6 162.1 15 164.5 15H179.2C181.4 15 183.1 15.7 184.3 17.1C185.7 18.3 186.4 20 186.4 22.2V218.1C186.4 220.1 185.7 221.8 184.3 223.2C183.1 224.4 181.4 225 179.2 225H164.5C162.5 225 160.8 224.4 159.4 223.2C158.2 221.8 157.6 220.1 157.6 218.1V70.5L107.5 168.3C106.7 170.3 105.5 171.9 103.9 173.1C102.3 174.1 100.3 174.6 97.9 174.6H88.6C86 174.6 83.9 174.1 82.3 173.1C80.9 171.9 79.7 170.3 78.7 168.3L28.6 70.5V218.1C28.6 220.1 27.9 221.8 26.5 223.2C25.3 224.4 23.7 225 21.7 225H6.99998Z"
                  fill="white"
               />
            </svg>
         </div>
      </div>
   </footer>
</template>

<style scoped lang="scss">
footer {
   padding-top: 60px;
   padding-bottom: 30px;

   border-radius: 60px 60px 0 0;
   background-color: var(--black-bg);

   .content-wrapper {
      gap: 60px;

      .footer-info_wrap {
         display: grid;
         grid-template-columns: 520px 1fr;
         gap: 70px;

         .footer-info {
            display: flex;
            flex-direction: column;
            gap: 40px;

            &_contacts {
               display: flex;
               flex-direction: column;
               gap: 20px;
            }

            &_requisites {
               display: flex;
               flex-direction: column;
               gap: 30px;

               .requisites-wrap {
                  display: flex;
                  justify-content: space-between;

                  .requisites-1,
                  .requisites-2 {
                     display: flex;
                     flex-direction: column;
                     gap: 10px;
                  }
               }

               .requisites-3 {
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
               }
            }
         }

         .footer-map {
            display: flex;
            flex-direction: column;
            gap: 30px;

            .footer-map-wrap {
               flex: 1;
               overflow: hidden;
               border-radius: 30px;
            }
         }
      }

      .footer-copy_wrap {
         display: flex;
         flex-direction: column;
         gap: 30px;
         .footer-copy {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            column-gap: 50px;
            row-gap: 10px;

            .made-by-BuroBurakova {
               display: flex;
               align-items: center;
               gap: 20px;
            }
         }
      }
   }

   .logo-vector {
      height: auto;
      width: 100%;
   }

   @media (max-width: 1919px) {
      padding-top: 30px;
      // padding-bottom: unset;

      .content-wrapper {
         gap: 50px;

         .footer-info_wrap {
            grid-template-columns: repeat(2, 1fr);
         }
      }
   }

   @media (max-width: 1439px) {
      padding: 30px;

      .content-wrapper {
         .footer-copy_wrap {
            .text-16 {
               font-size: 14px;
            }
         }
      }
   }

   @media (max-width: 1279px) {
      .content-wrapper {
         gap: 30px;

         .footer-info_wrap {
            display: flex;
            flex-direction: column;
            gap: 30px;

            .footer-info {
               .footer-info_requisites {
                  flex-direction: row;
                  align-items: center;
                  gap: 70px;

                  .requisites-wrap {
                     gap: 70px;
                  }

                  .requisites-3 {
                     max-width: 395px;
                  }
               }
            }

            .footer-map {
               .footer-map-wrap {
                  > iframe {
                     height: 400px;
                  }
               }
            }
         }
      }
   }

   @media (max-width: 999px) {
      padding: 20px;
      border-radius: 30px 30px 0 0;

      .content-wrapper {
         .footer-info_wrap {
            .footer-info {
               .footer-info_requisites {
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 30px;
               }
            }
         }

         .footer-copy_wrap {
            .footer-copy {
               flex-direction: column;
               justify-content: flex-start;
               align-items: flex-start;
            }
         }
      }
   }

   @media (max-width: 719px) {
      padding-top: 20px;
      padding-bottom: 20px;

      .content-wrapper {
         gap: 20px;

         .footer-info_wrap {
            gap: 20px;

            .footer-info {
               gap: 20px;

               &_contacts {
                  gap: 10px;
               }

               .footer-info_requisites {
                  width: 100%;
                  gap: 20px;

                  .requisites-wrap {
                     gap: unset;
                     justify-content: space-between;
                  }
               }
            }

            .footer-map {
               .footer-map-wrap {
                  border-radius: 20px;

                  > iframe {
                     height: 220px;
                  }
               }
            }
         }
      }
   }

   @media (max-width: 479px) {
      padding: 10px;
      border-radius: 20px 20px 0 0;

      .content-wrapper {
         .footer-info_wrap {
            .footer-info {
               .footer-info_requisites {
                  .requisites-wrap {
                     flex-direction: column;
                     justify-content: flex-start;
                     gap: 20px;
                  }
               }
            }
         }

         .footer-copy_wrap {
            .footer-copy {
               .made-by-BuroBurakova {
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 6px;
               }
            }
         }
      }
   }
}
</style>
