export interface Thread {
  id: number;
  title: string;
  content: string;
}

export const THREADS: Thread[] = [
  { id: 1, title: 'Workshop: Web-Anwendungen mit Angular', content: 'Angular gehört neben React und Vue.js ' +
      'zu den meist genutzten Frameworks für Webanwendungen. Durch die stark strukturierte Vorgehensweise ' +
      'bei der Enrwicklung empfiehlt sich vor allem für komplexere Single-page Applications (SPA).\n' +
      '\n' +
      'In dem iX-Workshop Single-page Applications mit Angular entwickeln die Teilnehmer eine Angular-Anwendung – ' +
      'vom Einstieg in TypeScript über die Konzepte und die Herausforderungen der SPA-Architektur bis zum Debugging und Testing. ' +
      'Sie lernen dabei grundlegende Angular-Ansätze wie Komponenten, ' +
      'Routing und Services und Tools des Angular-Ökosystems kennen.' },
  { id: 2, title: 'React 16.13: Vorbereitungen für kommende', content: 'React 16.13 ist da. Neu in der Minor-Version ' +
      'sind einige Deprecations sowie neue Warnungen, die beispielsweise dabei helfen sollen, ' +
      'bestimmte Bugs beim Rendering schneller zu entdecken. Auch, wer noch mit String Refs arbeitet, ' +
      'die bereits als deprecated markiert worden waren, bekommt in Zukunft in manchen Fällen eine Warnung angezeigt. ' +
      'Die meisten Anwendungsfälle von String Refs sollen in Zukunft zwar mit einem automatischen Codemod migriert werden; ' +
      'in einigen Ausnahmenfällen ist das aber nicht möglich. Wenn ein solcher Fall im Code enthalten ist, können Entwickler ' +
      'sich nun mit einer Warnung darauf hinweisen lassen. Dafür muss das Babel-Plug-in @babel/plugin-transform-react-jsx-self ' +
      'installiert sein.'},
];
