go = (destination) => {
    
    switch (destination) {
        case "exporter":
            window.open("https://github.com/matuszewski/ruct/docker/exporter","_self");
            break;
        case "loader":
            window.open("https://github.com/matuszewski/ruct/podman/loader","_self");
            break;
        case "monitor":
            window.open("https://github.com/matuszewski/ruct/podman/monitor","_self");
            break;
        case "remover":
            window.open("https://github.com/matuszewski/ruct/podman/remover","_self");
            break;
        default:
            break;
    }
}