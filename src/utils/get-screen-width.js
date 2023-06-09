const getScreenWidth = () => {
    const width = screen.width;

    return width >= 1024 ? 'desktop' : 'mobile';
};

export default getScreenWidth;
