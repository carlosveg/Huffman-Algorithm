const listAvailables = document.getElementById('availableItemsList');
const listUsed = document.getElementById('usedItemsList');

Sortable.create(listAvailables, {
    group: {
        name: 'itemsList'
    },
    animation: 150
});

Sortable.create(listUsed, {
    group: {
        name: 'itemsList'
    },
    animation: 150
})