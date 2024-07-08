import PropTypes from "prop-types";

function RootLayout({ children }) {
  return (
   
      <div className="bg-white ">
        
        {children}
        
      </div>
   
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;