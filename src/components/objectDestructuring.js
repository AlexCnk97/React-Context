import React, { useEffect } from 'react'

const ObjectDestructuring = () => {
    const servcios = {
        api: {},
        mailer: "Soy Mailer",
        apollo: {},
    }

    const enviarCorreo = (src) => {
        const { mailer } = src;
        console.log(mailer)
    };

    useEffect(() => {
        enviarCorreo(servcios);
    }, [])
    return (
        <div>

        </div>
    )
}

export default ObjectDestructuring;