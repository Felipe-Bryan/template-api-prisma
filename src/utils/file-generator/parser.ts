import fs from 'fs-extra';
import path from 'path';

// Função para ler e retornar o conteúdo do arquivo schema.prisma
export const readSchema = (filePath: string) => {
  const schemaContent = fs.readFileSync(filePath, 'utf-8');

  return schemaContent;
};

export const parseSchema = (schemaContent: string) => {
  const regex = /model (\w+)[^{]*{([^}]*)}/g;
  let match;
  const models = [];

  const allLines = schemaContent.split('\n');

  while ((match = regex.exec(schemaContent)) !== null) {
    const fullMatch = match[0];

    const linesBefore = schemaContent.slice(0, match.index).split('\n');
    const startLine = linesBefore.length - 1;

    const modelLinesCount = fullMatch.split('\n').length;
    const modelEndLine = startLine + modelLinesCount;

    const nextLine = allLines[modelEndLine]?.trim();
    const shouldIgnore = nextLine.includes('ignore');

    if (shouldIgnore) {
      console.log(`Ignoring model ${match[1]} due to "// ignore" directive.`);
    } else {
      const modelName = match[1];

      const fieldsBlock = match[2];
      const fields = fieldsBlock
        .split('\n')
        .map((line) => line.trim().replace(/\s+/g, ' '))
        .filter(
          (line) =>
            line &&
            !line.startsWith('//') &&
            !line.includes('@relation') &&
            !line.includes('ignore') &&
            !line.startsWith('@@') &&
            !line.startsWith('}')
        )
        .map((line) => {
          const [fieldName, fieldType] = line.split(' ');
          return { fieldName, fieldType };
        });

      models.push({ modelName, fields });
    }
  }

  return models;
};
