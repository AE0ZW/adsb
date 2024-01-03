import React from 'react';

export const Overlay = ({ visible, children }) => {
    const styles = {
        overlayContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            display: visible ? 'flex' : 'none',
            justifyContent:'center',
            flexDirection:'column',
            height: '100%',
            width: '100%',
            background: 'rgba(76, 175, 80, 0.3)',
            zIndex: 1000
        },
        overlayContent: {
            display:'flex',
            justifyContent:'center'
        }
    };

    return (
        <div style={styles.overlayContainer}>
            <div style={styles.overlayContent}>
                {children}
            </div>
        </div>
    );
}