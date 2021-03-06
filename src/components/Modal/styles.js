const styles = theme => ({
    modal:{
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    TextField:{
        width: "100%"
    },
    header:{
        textAlign:"center",
        fontSize: 24,
        fontWeight: 800,
        backgroundColor: "#74b9ff",
        color: "white",
    }
})

export default styles;