import Sidebar from "./Sidebar";

const Baselayout = ({children}) => {
    return (
        <div>
        <div className="layout">
 <Sidebar />
 <main className="layout__main-content">{children}</main>;
</div>
   </div>
    );
};

export default Baselayout;