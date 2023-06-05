import React from 'react'

const DivTable = ({children, col, off, classLoad, classTable}) => {
  return (
    <div className='row mt-3'>
        <div className={ 'col-md-'+col+' offset-md-'+off}>
            <div className={'card border border-white text-center '+classLoad}>
                <div className='card-body'>
                    <img src='/loading.gif' width="36" height="36" className='img-fluid'></img>
                </div>
            </div>
            <div className={'table-responsive '+classTable}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DivTable