
// const Body = () => (
//     <body>
//         <header>
//             <h1>My watchlist</h1>
//         </header>
//         <main></main>
//     </body>
// )

// export default Body;

import Layout from './layout';

const Body: any = ({ children }: any) => {
    return (
        <body>
            {children}
        </body>
    );
};

export default Body;