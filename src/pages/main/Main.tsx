import React from "react";
import { Form } from "../../components/form/Form";
import { JobVacancyList } from "../../components/jobVacancyList/JobVacancyList";
import { useGetVacanciesQuery, useGetAccessTokenQuery, useGetCataloguesQuery } from "../../services/startupSummerApi";
// import { fetchGetAccessKey } from "../../services/getAccessKey";
import { SearchInput } from "../../components/searchInput/SearchInput";


import styles from "./styles.module.css";
import commonStyles from "../../commonStyles/styles.module.css";
import { useAppSelector } from "../../hooks/redux";
import { getRequestParams } from "../../utilities/getRequestParams";


function Main() {

  const dataFromForm = useAppSelector(state => state.vacancyFilterReducer);
  const { searchWords } = useAppSelector(state => state.searchInputSliceReducer);
  

  const requestParams = getRequestParams(dataFromForm, searchWords);

  
  // useEffect(() => {
  //   const accessKey = localStorage.getItem("key");
  //
  //   if (!accessKey) {
  //     fetchGetAccessKey()
  //       .then((res) => {
  //         localStorage.setItem("key", res.data.access_token);
  //       });
  //   }
  // }


  const { data, error, isLoading } = useGetVacanciesQuery(requestParams);


  return (
    <main className={`${styles.main} ${commonStyles.wrapper}`}>
      <Form />
      {/*later change class rightSide*/}
      <div className={styles.rightSide}>
        <SearchInput />
        {
          !isLoading ? <JobVacancyList data={data} /> : <div>Loading</div>
        }
      </div>


    </main>
  );
}

export { Main };