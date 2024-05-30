import React from 'react'
import '../FormEditBuku/FormEditBuku.css'

const FormEditBuku = () => {
  return (
    <>
        <div className='edit-field'>
            <div className='edit-form-container'>
                <h2>Edit Data Buku</h2>
                
                <div className='edit-form'>
                    <form action="" className='edit-text'>
                        <p>Judul Buku</p>
                        <input type="text" />

                        <p>ISBN</p>
                        <input type="text" />

                        <p>Penulis</p>
                        <input type="text" />

                        <p>Deskripsi</p>
                        <textarea name="" id="" rows={3}>

                        </textarea>

                        <p>Ketersediaan</p>
                        <div className='ketersediaan-form'>
                            <input type="text" placeholder='No Rak'/>
                            <input type="text" placeholder='Jumlah'/>
                            <input type="text" placeholder='Tersedia'/>
                        </div>

                        <p>Informasi Detail</p>
                        <div className='informasi-detail-form'>
                            <input type="text" placeholder='Bahasa'/>
                            <input type="text" placeholder='Edisi'/>
                            <input type="text" placeholder='Kategori'/>
                        </div>

                        <div className='edit-form-btn'>
                            <button>Simpan</button>
                        </div>
                    </form>

                    <div className='edit-image'>
                        <p>Sampul Buku</p>
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormEditBuku