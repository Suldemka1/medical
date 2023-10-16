const { useState, useEffect } = require("react")

const useRoutes = (route) => {
    const [routes, setRoutes] = useState([])

    const getRoutes = async () => {
        await fetch(`${process.env.api}/items/${route}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.token}`,
                },
            })
            .then((res) => res.json())
            .then((res) => setRoutes(res.data))
    }

    useEffect(() => {
        getRoutes()
    }, [])

    return routes
}

export { useRoutes }