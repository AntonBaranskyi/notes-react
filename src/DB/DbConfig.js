export const DBConfig = {
  name: "MyNotes",
  version: 1,
  objectStoresMeta: [
    {
      store: "notes",
      storeConfig: { keyPath: "id" },
      storeSchema: [
        {
          title: "name",
          text: "test",
          lastModified: "",
          id: "",
          options: { unique: false },
        },
      ],
    },
  ],
};
