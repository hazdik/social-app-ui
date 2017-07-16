const getUrl = (pathname) => `http://${process.env.RB_API_URI}/${process.env.RB_API_NAMESPACE}${pathname}`;

export default getUrl;
