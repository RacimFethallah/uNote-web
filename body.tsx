import Aside from "./aside";
import Main from "./main";

const Body = () => (
    <body class="grid grid-cols-2 h-screen">
        <Aside />
        <Main />
    </body>
)

export default Body;


// const Body: any = ({ children }: any) => {
//     return (
//         <body>
//             {children}
//         </body>
//     );
// };

// export default Body;