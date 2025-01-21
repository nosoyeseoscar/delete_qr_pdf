initial_page = 1
end_page = 48

for (var i = initial_page-1; i <= end_page; i++){
   var page = this.getPageNumWords(i)
   this.addAnnot({
        
        type: "Square",

        page: i,
        rect: [10, 15, 80, 90], // Coordenadas de la esquina inferior izquierda

        color: ["G", 0], // Negro

        fillColor: ["G", 0], // Relleno negro

        strokeWidth: 0
    
    });
}
