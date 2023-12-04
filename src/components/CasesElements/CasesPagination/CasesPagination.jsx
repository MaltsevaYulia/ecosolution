import css from './CasesPagination.module.css';

const CasesPagination = ({ count, all }) => {
  const updatedCount = String(count).padStart(2, '0');
  const updatedAll = String(all).padStart(2, '0');
  return (
    <div className={css.container}>
      <span className={css.active}>{updatedCount}</span>
      <span className={css.static}>/{updatedAll}</span>
    </div>
  );
};

export default CasesPagination;
