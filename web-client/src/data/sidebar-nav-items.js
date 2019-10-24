export default function() {
  return [
    {
      title: "Zlecenia",
      to: "/blog-posts",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: "",
      sub_menu: [
        {
          title: "Szukaj zleceń",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        },
        {
          title: "Kontrakty",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        },
        {
          title: "Daj zlecenie",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        },
        {
          title: "Znajdź firmę",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        }
      ]
    },
    {
      title: "Firma",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/user-profile-lite",
      sub_menu: [
        {
          title: "Inwestycje",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        },
        {
          title: "Atrybuty",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        },
        {
          title: "Rozwój",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        },
        {
          title: "Siedziba",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        }
      ]
    },
    {
      title: "Pracownicy",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "#",
      sub_menu: [
        {
          title: "Zatrudnienia",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        },
        {
          title: "Rekrutacja",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        },
        {
          title: "Rozwój",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        },
        {
          title: "Kadra",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        }
      ]
    },

    {
      title: "Konto bankowe",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "#",
      sub_menu: [
        {
          title: "Bank",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        },
        {
          title: "Kredyt",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        }
      ]
    },
    {
      title: "Spółka",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables"
    },
    {
      title: "Zadania",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite"
    }
  ];
}
