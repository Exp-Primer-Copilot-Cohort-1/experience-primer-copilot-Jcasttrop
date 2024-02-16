function skillsMember(name) {
    // Supongamos que tenemos un objeto con habilidades por nombre
    const skillsByMember = {
        "Juan": ["JavaScript", "React", "Node.js"],
        "Maria": ["HTML", "CSS", "JavaScript", "Design"],
        "Carlos": ["Python", "Django", "Machine Learning"]
    };

    // Retorna las habilidades del miembro si el nombre existe en el objeto
    if (skillsByMember.hasOwnProperty(name)) {
        return skillsByMember[name];
    } else {
        // Retorna un mensaje indicando que el miembro no se encontró si el nombre no existe
        return `No se encontraron habilidades para ${name}.`;
    }
}
