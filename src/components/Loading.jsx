const Loading = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col text-center">
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;
