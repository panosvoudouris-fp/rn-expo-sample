const data = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        data: [
          { title: 'title 1', content: 'some content for section 1' },
          { title: 'title 2', content: 'some content for section 2' },
          { title: 'title 3', content: 'some content for section 3' },
          { title: 'title 4', content: 'some content for section 4' },
          { title: 'title 5', content: 'some content for section 5' },
        ],
      });
    }, 2000)
  );
};

export default data;
