import PictogramersIcon from "./PictogramersIcon"

const gmail = "M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
const github = "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
const linkedin = "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
const codepen = "M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
const html = "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"
const css = "M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z"
const js = "M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z"
const react = "M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z"
const redux = "M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
const tailwind = "M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
const sass = "m27.533 13.796c.039-.001.085-.002.132-.002.834 0 1.623.194 2.323.54l-.031-.014c.638.311 1.162.771 1.541 1.335l.009.014c.299.436.477.975.477 1.555 0 .042-.001.084-.003.125v-.006c-.031.579-.294 1.09-.698 1.448l-.002.002c-.221.217-.488.387-.785.495l-.015.005q-.25.05-.275-.075t.225-.275c.452-.274.779-.716.898-1.237l.003-.013c.003-.042.005-.091.005-.141 0-.311-.074-.605-.205-.865l.005.011c-.217-.453-.541-.825-.94-1.094l-.01-.006c-.597-.384-1.313-.636-2.083-.699l-.016-.001c-.262-.039-.564-.061-.872-.061-.801 0-1.566.151-2.27.426l.042-.015c.145.339.236.732.249 1.144v.005c-.016.845-.47 1.58-1.145 1.99l-.011.006c-.31.22-.664.413-1.041.563l-.035.012c-.229.112-.498.177-.782.177-.033 0-.065-.001-.097-.003h.005q-.949-.199-.45-1.65c.145-.421.348-.786.605-1.107l-.006.007c.329-.43.69-.807 1.089-1.141l.011-.009-.098-.146c-.183-.312-.351-.675-.486-1.054l-.014-.046q-.15-.5-.25-.949l-.05-.35-.5.949q-.65 1.2-1.25 2.099l-.15.25c.168.408.292.881.348 1.375l.002.025c.004.047.006.103.006.159 0 .758-.374 1.428-.948 1.837l-.007.005c-.274.169-.601.344-.94.5l-.06.025c-.353.153-.762.253-1.191.275h-.009c-.033.002-.072.004-.111.004-.25 0-.487-.057-.699-.158l.01.004c-.127-.109-.207-.269-.207-.448 0-.091.021-.178.058-.255l-.002.004c.4-.561.794-1.049 1.213-1.515l-.013.015 1.1-1.399-.199-.45c-.16-.294-.313-.641-.436-1.001l-.014-.048q-.15-.5-.25-.949l-.05-.35-.5 1.2q-.599 1.399-1.1 2.399-.747 1.5-1.25 2.3l-.1.15q-.599.949-1.15.949t-.747-.7c-.096-.344-.152-.739-.152-1.147 0-.036 0-.072.001-.108v.005l.1-.7v.05q-.4.949-.8 1.749c-.177.346-.359.641-.563.919l.013-.019c-.206.216-.496.35-.817.35-.003 0-.005 0-.008 0-.021.002-.045.002-.069.002-.253 0-.483-.096-.657-.253l.001.001c-.349-.358-.608-.805-.742-1.304l-.005-.021c-.164-.455-.258-.981-.258-1.529 0-.071.002-.141.005-.21v.01c.079-.796.238-1.525.471-2.22l-.021.071-1.799 1.05v.05c.261.542.414 1.178.414 1.85 0 .123-.005.245-.015.365l.001-.016c-.053 1.03-.382 1.973-.913 2.77l.013-.02c-.557.884-1.36 1.567-2.314 1.962l-.033.012c-.537.241-1.165.382-1.825.382-.418 0-.824-.056-1.208-.162l.032.007c-.318-.107-.578-.319-.743-.593l-.003-.006c-.233-.338-.38-.751-.403-1.196v-.006c-.011-.101-.017-.218-.017-.337 0-.513.117-.999.326-1.432l-.009.02c.574-.979 1.368-1.772 2.316-2.33l.03-.016c.671-.465 1.442-.916 2.247-1.309l.106-.047.25-.15q-.45-.35-1.65-1.2c-1.069-.716-1.998-1.439-2.874-2.221l.025.022c-.847-.729-1.464-1.703-1.741-2.812l-.008-.038c-.026-.154-.041-.331-.041-.511 0-.564.145-1.094.399-1.555l-.008.017c.56-1.204 1.336-2.219 2.288-3.035l.012-.01c1.03-.973 2.196-1.82 3.462-2.506l.087-.043c1.131-.653 2.452-1.26 3.829-1.747l.17-.052c1.279-.468 2.756-.742 4.296-.747h.002c.07-.002.153-.004.236-.004 1.241 0 2.415.287 3.459.798l-.046-.021c.9.41 1.574 1.182 1.844 2.126l.006.024c.083.322.13.692.13 1.073 0 .632-.131 1.234-.366 1.78l.011-.029c-.428 1.037-1.037 1.92-1.797 2.647l-.003.003c-.77.763-1.693 1.373-2.718 1.78l-.055.019c-1.074.461-2.321.751-3.63.799l-.019.001c-.192.022-.414.034-.639.034-.592 0-1.163-.085-1.703-.244l.043.011c-.483-.154-.9-.393-1.254-.703l.004.003c-.248-.202-.45-.451-.594-.734l-.006-.013q-.15-.4-.025-.475t.175-.025l.25.25c.279.259.612.463.98.593l.02.006c.506.176 1.09.278 1.697.278.195 0 .387-.01.576-.031l-.023.002c1.618-.191 3.077-.743 4.336-1.573l-.037.023c1.064-.633 1.925-1.503 2.531-2.54l.018-.034c.301-.442.481-.988.481-1.576 0-.361-.068-.707-.192-1.025l.007.019c-.374-.591-.979-1.007-1.685-1.122l-.014-.002c-.548-.135-1.178-.213-1.825-.213-.521 0-1.031.05-1.524.146l.05-.008c-1.687.304-3.195.825-4.586 1.541l.091-.043q-6.148 3.1-6.349 6.349v.049c0 .873.343 1.666.902 2.252l-.001-.001c.637.708 1.341 1.333 2.11 1.873l.039.026c.701.524 1.321 1.065 1.898 1.649l.001.002.1.1 3.2-1.749c.365-.528.804-.974 1.308-1.334l.016-.011c.4-.336.908-.555 1.465-.599l.009-.001c.02-.002.043-.002.067-.002.373 0 .693.225.831.547l.002.006c.105.235.166.51.166.799 0 .088-.006.175-.017.261l.001-.01-.097.493.15-.1c.104-.079.235-.126.377-.126.09 0 .175.019.252.053l-.004-.002c.192.05.331.222.331.426 0 .035-.004.069-.012.102l.001-.003-.15.55q-.45 1.799-.599 2.599c-.05.173-.078.372-.078.578 0 .043.001.085.004.127v-.006q.025.3.075.3t.199-.3l.15-.35q.05 0 0 .05l.55-1.15q1.95-4.298 2.099-4.8l.3-.949q.05-.1.4-.199c.237-.064.508-.101.788-.101.023 0 .046 0 .068.001h-.003q.7 0 .7.35l-.05.25c-.112.308-.223.693-.309 1.087l-.011.063c-.02.129-.032.277-.032.429 0 .202.02.399.059.59l-.003-.019.05.199c.102.417.257.783.46 1.117l-.01-.017q.599-.999 1.15-2.049c.29-.483.56-1.043.777-1.629l.023-.07c.075-.377.161-.695.266-1.005l-.016.056q.05-.15.427-.225c.238-.048.511-.075.79-.075h.036-.002q.7 0 .747.35l-.1.199c-.119.336-.223.74-.293 1.155l-.006.045c-.009.097-.015.209-.015.323 0 .239.024.473.069.699l-.004-.023v.199c.115.436.286.819.51 1.166l-.01-.016.15.35c.835-.41 1.817-.65 2.855-.65h.039-.002zm-21.439 7.253c.695-.718 1.124-1.698 1.124-2.778 0-.417-.064-.819-.182-1.197l.008.028-.8.5c-.816.465-1.522.984-2.161 1.574l.008-.007c-.485.446-.843 1.023-1.019 1.674l-.006.025q-.225.925.225 1.2c.183.084.398.133.623.133.246 0 .479-.058.684-.162l-.009.004c.594-.216 1.097-.559 1.497-.998l.003-.003zm6.697-4.604q.25-.65.55-1.55.4-1.2.275-1.399t-.475-.05c-.278.135-.511.32-.697.547l-.003.004c-.208.263-.406.557-.582.866l-.018.034c-.202.331-.373.712-.492 1.116l-.009.034c-.193.523-.305 1.128-.305 1.758 0 .085.002.169.006.253v-.012q.05.999.32 1.075t.625-.725c.229-.413.433-.893.585-1.396l.014-.054q.149-.354.204-.501zm5.546 2.65c.693-.311 1.181-.966 1.249-1.741l.001-.008v-.05l-.55.7-.999 1.1c-.015.012-.025.03-.025.05 0 .02.01.038.024.05q.048.049.3-.1zm4.299-.95c.756-.216 1.3-.901 1.3-1.712 0-.013 0-.026 0-.039v.002c-.01-.2-.046-.388-.105-.566l.004.015c-.389.346-.708.76-.939 1.227l-.011.023q-.451.899-.252 1.048z"
const expo = "M387.1,248.8c31.5,2.1,59.7-19.4,65.9-50.3c-7.6-11.8-20.6-18.8-34.6-18.8C382,178.8,362.4,222.1,387.1,248.8L387.1,248.8z M240.1,75.1l85.8-49.7L298.6,10L180.3,78.6l9.4,5.3l17.9,10.1L240.1,75.1L240.1,75.1z M336.9,20.9l3,3l39.8,121.6 c0.8,2.1-0.1,4.4-2,5.5c-31.5,18.5-46.7,55.9-37.1,91.1c10.5,38.3,47,63.3,86.5,59.3c2.2-0.2,4.2,1.2,4.9,3.3l41,124.9 c0.7,2.1-0.2,4.3-2,5.5l-125.8,76.4l-2.1,0.6l-3.2-0.7l-44.3-28.8l-1.7-2.1l-86.4-206.5l-131.6,78l-0.8,0.5l-4.2-0.3l-29.8-17.5 c-2.2-1.2-3-3.9-1.8-6.1L166.6,76.5l2.2-2.1L296.2,0.7c1.4-0.8,3.2-0.9,4.7-0.1L336.9,20.9z M203.7,102.5l-30.9-17.4L49.6,328.9 L72,342.1l106.2-144.3c1-1.4,2.7-2.2,4.3-1.9c1.7,0.2,3.1,1.2,3.8,2.8l115.7,276.9l30.9,20L203.7,102.5L203.7,102.5z M418.3,271.5 c-36.1,0-60.6-36.7-46.8-70.1c13.8-33.3,57-41.9,82.5-16.4c9.5,9.5,14.9,22.3,14.9,35.8C469,248.8,446.3,271.5,418.3,271.5 L418.3,271.5z"
const java = "M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"
const python = "M19.14,7.5A2.86,2.86 0 0,1 22,10.36V14.14A2.86,2.86 0 0,1 19.14,17H12C12,17.39 12.32,17.96 12.71,17.96H17V19.64A2.86,2.86 0 0,1 14.14,22.5H9.86A2.86,2.86 0 0,1 7,19.64V15.89C7,14.31 8.28,13.04 9.86,13.04H15.11C16.69,13.04 17.96,11.76 17.96,10.18V7.5H19.14M14.86,19.29C14.46,19.29 14.14,19.59 14.14,20.18C14.14,20.77 14.46,20.89 14.86,20.89A0.71,0.71 0 0,0 15.57,20.18C15.57,19.59 15.25,19.29 14.86,19.29M4.86,17.5C3.28,17.5 2,16.22 2,14.64V10.86C2,9.28 3.28,8 4.86,8H12C12,7.61 11.68,7.04 11.29,7.04H7V5.36C7,3.78 8.28,2.5 9.86,2.5H14.14C15.72,2.5 17,3.78 17,5.36V9.11C17,10.69 15.72,11.96 14.14,11.96H8.89C7.31,11.96 6.04,13.24 6.04,14.82V17.5H4.86M9.14,5.71C9.54,5.71 9.86,5.41 9.86,4.82C9.86,4.23 9.54,4.11 9.14,4.11C8.75,4.11 8.43,4.23 8.43,4.82C8.43,5.41 8.75,5.71 9.14,5.71Z"
const externalLink = "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
const pdf = "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z"
const drive = "M7.71,3.5L1.15,15L4.58,21L11.13,9.5M9.73,15L6.3,21H19.42L22.85,15M22.28,14L15.42,2H8.58L8.57,2L15.43,14H22.28Z"

export const GmailIcon = ({ className }) => <PictogramersIcon className={className} d={gmail} />
export const GithubIcon = ({ className }) => <PictogramersIcon className={className} d={github} viewBox="0 0 496 512" />
export const LinkedInIcon = ({ className }) => <PictogramersIcon className={className} d={linkedin} viewBox="0 0 448 512" />
export const CodepenIcon = ({ className }) => <PictogramersIcon className={className} d={codepen} viewBox="0 0 512 512" />
export const HTMLIcon = ({ className }) => <PictogramersIcon className={className} d={html} />
export const CSSIcon = ({ className }) => <PictogramersIcon className={className} d={css} />
export const JavascriptIcon = ({ className }) => <PictogramersIcon className={className} d={js} />
export const ReactIcon = ({ className }) => <PictogramersIcon className={className} d={react} />
export const ReduxIcon = ({ className }) => <PictogramersIcon className={className} d={redux} viewBox="0 -6 256 256" />
export const TailwindIcon = ({ className }) => <PictogramersIcon className={className} d={tailwind} />
export const SassIcon = ({ className }) => <PictogramersIcon className={className} d={sass} viewBox="0 -4 32 32" />
export const ExpoIcon = ({ className }) => <PictogramersIcon className={className} d={expo} viewBox="0 0 512 512" />
export const JavaIcon = ({ className }) => <PictogramersIcon className={className} d={java} viewBox="0 0 50 50" />
export const PythonIcon = ({ className }) => <PictogramersIcon className={className} d={python} />
export const ExternalLinkIcon = ({ className }) => <PictogramersIcon className={className} d={externalLink} />
export const PDFIcon = ({ className }) => <PictogramersIcon className={className} d={pdf} />
export const GoogleDriveIcon = ({ className }) => <PictogramersIcon className={className} d={drive} />