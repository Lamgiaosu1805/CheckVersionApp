const TestController = {
    index: (req, res, next) => {
        res.json({
            a: 1,
            b: 2
        })
    },
    getCurrentVersionApp: (req, res, next) => {
        try {
            const query = req.query;
            let versionApp = ""
            const appName = query.appName || ""
            switch (appName) {
                case "TIKLUY":
                    versionApp = "1.3.0"
                    break;

                default:
                    versionApp = ""
                    break;
            }
            res.json({
                version: versionApp,
                forceUpdate: false,
                appName: appName
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = TestController;