import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    displayName: 'Content';
    icon: 'cup';
  };
  attributes: {
    Lecture: Schema.Attribute.RichText;
    Screenshot: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.content': SharedContent;
    }
  }
}
