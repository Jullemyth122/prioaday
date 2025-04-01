// homeLoader.tsx
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function homeLoader() {
    // Wait for 2 seconds
    await delay(2000);

    // Return static data
    const staticData = [
        { id: 1, title: 'Static Data 1' },
        { id: 2, title: 'Static Data 2' },
        { id: 3, title: 'Static Data 3' },
    ];
    return staticData;
}

export default homeLoader;
