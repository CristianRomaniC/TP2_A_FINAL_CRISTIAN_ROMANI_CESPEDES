const notFoundMiddleware = (req, res) => {
    res.status(404).json({errorMsg: "Ruta no encontrada."});
};

export default notFoundMiddleware;