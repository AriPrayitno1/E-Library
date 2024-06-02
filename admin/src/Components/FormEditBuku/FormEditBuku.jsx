import React from 'react'
import '../FormEditBuku/FormEditBuku.css'

const FormEditBuku = () => {
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          // Logic untuk meng-handle file yang diunggah, seperti mengunggah ke server atau menyimpan di state.
          console.log('Image uploaded:', file);
        }
      };

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

                        <p>Nama Penulis</p>
                        <input type="text" />

                        <p>Nama Penerbit</p>
                        <input type="text" />

                        <p>Ketersediaan</p>
                        <div className='ketersediaan-form'>
                            <input type="text" placeholder='Lokasi Rak'/>
                            <input type="text" placeholder='Jumlah'/>
                            <input type="text" placeholder='Tersedia'/>
                        </div>

                        <div className='edit-form-btn'>
                            <button>Simpan</button>
                            <button>Batal</button>
                        </div>
                    </form>

                    <div className='edit-image'>
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

export default FormEditBuku