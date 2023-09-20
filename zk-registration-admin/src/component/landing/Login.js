import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import axiosClient from '../../Apiclient';
import "./CSS/Login.css"

const { ethereum } = window;
function LoginWithMetamask() {
    const [isLoading, setIsLoading] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        // detect if Metamask is installed and unlocked
        const checkMetamaskConnection = async () => {
            const provider = await detectEthereumProvider();
            if (provider) {
                provider.on('accountsChanged', handleAccountsChanged);
                provider.on('disconnect', handleDisconnect);
                provider.on('chainChanged', handleChainChanged);
                setIsConnected(true);
            }
        };
        checkMetamaskConnection();

        return () => {
            if (ethereum && ethereum.off) {
                ethereum.off('accountsChanged', handleAccountsChanged);
                ethereum.off('disconnect', handleDisconnect);
                ethereum.off('chainChanged', handleChainChanged);
            }
        };
    }, []);

    const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
            setIsConnected(false);
        } else {
            setIsConnected(true);
        }
    };

    const handleDisconnect = (error) => {
        setIsConnected(false);
    };

    const handleChainChanged = (chainId) => {
        setIsConnected(true);
    };

    const handleLoginClick = async () => {
        setIsLoading(true);
        try {
            if (!isConnected) {
                await ethereum.request({ method: 'eth_requestAccounts' });
                setIsConnected(true);
            }

            const ethereumAddress = await ethereum.request({ method: 'eth_accounts' });
            if (!ethereumAddress || ethereumAddress.length === 0) {
                alert('Please connect a Metamask account');
                return;
            }
            const response = await axiosClient.post('api/login', { ethereumAddress: ethereumAddress[0] });
            const { userId, authToken } = response.data;
            localStorage.setItem('authToken', authToken);
            localStorage.setItem('userId', userId);
            window.location.href = '/home';
        } catch (error) {
            console.error(error);
            alert('Failed to login with Metamask');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Login with Metamask</h1>
            <div id="logo"></div>
            <button id="login-btn" disabled={isLoading} onClick={handleLoginClick}>
                {isLoading ? 'Loading...' : isConnected ? 'Login with Metamask' : 'Connect Metamask Account'}
            </button>
        </div>
    );
}

export default LoginWithMetamask;
