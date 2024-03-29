# Bet odds

App for monitoring betting markets in real-time with an odds screen

## Technology Stack

- Next.js v14
- React
- Typescript
- MUI
- GraphQL
- Apollo + graphql-ws
- Codegen

## Work done ✅
1. **Setted up latest version of Nextjs with Apollo & graphql-ws, that allow us to use 2 approaches of rendering components with ssr & csr for future purposes
2. **Prepared the data using custom adapter**
3. **Managed Apollo cache in away that data is fetched is only is nessesary**
4. **Displayed DataGrid using MUI and output monitor betting markets in real-time with an odds screen**
5. **Calculated best lines column**
6. **Built up virtualization, limit the amount of rendering**
7. **Setted up graphql codegen typization**
8. **Designed future layout (link below)**

## Getting Started

1. **Create `.env.local` file**
  - In the root of the project, create a file named `.env.local`.
  - Add the following variables, replacing `<host_pathname>` with the GraphQL URL

```bash
NEXT_PUBLIC_GRAPHQL_HOST_PATHNAME=<host_pathname>
```

**To start work project locally use this commands**

```bash
npm install
npm run dev
```

**To generate graphql types use this command**

```bash
npm run codegen
```

**Current version of application**

<img width="1250" alt="image" src="https://github.com/nevmstas/odds-grid/assets/30295560/0c62f2e5-0d9e-4b62-9ad4-b3228ff1cf2b">


## Plans 💡

1. **Built layout using new design [figma link](https://www.figma.com/file/BmLf7zPtsxr8zBKiq4bWDe/NBA-ODDS?type=design&node-id=0%3A1&mode=design&t=4iY4rcwykpxVchyF-1)** 
<img width="1176" alt="image" src="https://github.com/nevmstas/odds-grid/assets/30295560/90f3f152-5f22-40dd-b2da-27fb29cc968e">

