const dropItems = document.getElementById('drop_items')

new Sortable(dropItems, {
    Animation: 350,
    dragClass: "sortable-drag"
});