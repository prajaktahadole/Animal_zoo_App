export const PaginationComponent = ({
    page=1,
    currentPage,
    lastPage,
    onPageChange
  }) =>{
    const arr = new Array(lastPage).fill(0);
    return(
      <div>
        <div>
          {arr.map((item, page) =><button onClick={() =>onPageChange(page +1)} disabled={(page+1 )=== currentPage} >{page}</button>)}
        </div>
      </div>
    )
  }

