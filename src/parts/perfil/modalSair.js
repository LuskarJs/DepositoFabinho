import React, { useState } from "react";
import "./modalsair.css";

const ModalDesconectar = ({ onClose, onLogout }) => {
    const [showModal, setShowModal] = useState(true);

    const handleClose = () => {
        setShowModal(false);
        onClose(); 
    };

    const handleLogout = () => {
        onLogout(); 
        setShowModal(false); 
    };

    return (
        showModal && (
            <div className="Desconectar">
                <form>
                    <div className="text-desconect">
                        <h4>Você deseja se desconectar?</h4>
                    </div>
                    <div className="action-button">
                        <button onClick={handleClose}>Fechar</button>
                        <button onClick={handleLogout}>Sair da Conta</button>
                    </div>
                </form>
            </div>
        )
    );
};

export default ModalDesconectar;
