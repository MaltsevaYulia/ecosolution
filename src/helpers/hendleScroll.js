export const handleScroll = sectionId => {
  const section = document.getElementById(sectionId);

  if (section) {
    const headerHeight = document.getElementById('header').offsetHeight;
    const sectionPosition = section.getBoundingClientRect();

    window.scrollTo({
      top: sectionPosition.top + window.scrollY - headerHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
};
