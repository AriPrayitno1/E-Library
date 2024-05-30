import React from 'react'
import '../FormTambahBuku/FormTambahBuku.css'

const FormTambahBuku = () => {
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          // Logic untuk meng-handle file yang diunggah, seperti mengunggah ke server atau menyimpan di state.
          console.log('Image uploaded:', file);
        }
      };

  return (
    <>
        <div className='addBook-field'>
            <div className='addBook-form-container'>
                <h2>Tambah Buku</h2>
                
                <div className='addBook-form'>
                    <form action="" className='addBook-text'>
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

                        <div className='addBook-form-btn'>
                            <button>Simpan</button>
                        </div>
                    </form>

                    <div className='addBook-image'>
                        <p>Sampul Buku</p>
                        <label htmlFor="imageUpload" className='uploadButton'>+</label>
                        <input 
                        id="imageUpload" 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        style={{ display: 'none' }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormTambahBuku