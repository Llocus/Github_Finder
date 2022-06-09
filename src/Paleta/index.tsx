export const paleta = (language: string) => {
    switch(language) {
        case "PHP":   return '#4f5d95';
        case "TypeScript":   return '#2b7489';
        case "Python":   return '#3572a5';
        case "Dockerfile": return '#384d54'
        case "HTML": return '#e34c26'
        case "Dart": return '#00b4ab'
        case "Java": return '#b07219'
        case "JavaScript": return '#f1e05a'
        case "Go": return '#00add8'
        case "Haskell": return '#5e5086'
        case "Swift": return '#f05138'
        case "Objective-C": return '#438eff'
        default:      return '#00b4ab'
    }
}