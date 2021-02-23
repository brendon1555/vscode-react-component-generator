export default {
    jsTemplate: `import React from 'react';

const {{componentName}} = (props) => {
    return <></>;
};

export default {{componentName}}
`,
    tsTemplate: `import React from 'react';

interface I{{componentName}}Props {

}

const {{componentName}} = (props: I{{componentName}}Props) => {
    return <></>;
}

export default {{componentName}};
`,
    storybook: `import React from 'react';
import {{componentName}} from './{{componentName}}';

export default {title: 'Component|{{componentName}}'};

export const {{componentName}}Example = () => (
    <>
        <{{componentName}} />
    </>
);
`,
    test: `// TODO: Add test template
export {}
`,
    index: `import {{componentName}} from './{{componentName}}';
export default {{componentName}};    
`
};