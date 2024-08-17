import adminMiddleware from "../../../middleware/adminMiddleware";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => <WrappedComponent {...props} />;

  Wrapper.getInitialProps = async (context) => {
    const { req, res } = context;

    // Use try-catch to handle potential errors
    try {
      const authResult = await adminMiddleware(req, res);

      if (authResult && authResult.redirect) {
        res.writeHead(302, { Location: authResult.redirect.destination });
        res.end();
        return;
      }

      // Pass through additional props
      const componentProps = WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps(context)
        : {};

      return { ...componentProps, ...authResult.props };
    } catch (error) {
      console.error("Error in withAuth HOC:", error);
      res.writeHead(500, { Location: "/error" }); // Redirect to an error page or handle as needed
      res.end();
      return;
    }
  };

  return Wrapper;
};

export default withAuth;
