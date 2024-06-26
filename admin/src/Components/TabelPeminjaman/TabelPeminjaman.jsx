import React, {useState} from 'react'
import '../TabelPeminjaman/TabelPeminjaman.css'
import edit_icon from '../../assets/edit-peminjaman-icon.png'
import delete_icon from '../../assets/delete-peminjaman-icon.png'

const TabelPeminjaman = () => {
    const [status, setStatus] = useState('Dipinjam'); // Initial state for status

  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === 'Dipinjam' ? 'Dikembalikan' : 'Dipinjam'));
  };

  return (
    <>
       <div className='tabel-field'>
            <div className='tabel-container'>
                <h2>Tabel Peminjaman dan Pengembalian Siswa</h2>
                
                <div className='tabel-peminjaman-pengembalian'>
                    <div className='tabel-peminjaman'>
                      <table className='tabel-component'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>ID Peminjaman</th>
                                <th>Tanggal Peminjaman</th>
                                <th>Nama Siswa</th>
                                <th>NIS</th>
                                <th>Kelas</th>
                                <th>Jumlah Pinjam</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Hapus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button onClick={toggleStatus}
                                        style={{
                                        backgroundColor: status === 'Dipinjam' ? 'red' : 'green',
                                        color: 'white',
                                        width: '100px',
                                        borderRadius: '5px',
                                        border: 'none',
                                        padding: '5px',
                                        cursor: 'pointer'
                                        }}>
                                        {status}
                                    </button>
                                </td>
                                <td><img src={edit_icon} alt="" /></td>
                                <td><img src={delete_icon} alt="" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><img src={edit_icon} alt="" /></td>
                                <td><img src={delete_icon} alt="" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><img src={edit_icon} alt="" /></td>
                                <td><img src={delete_icon} alt="" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><img src={edit_icon} alt="" /></td>
                                <td><img src={delete_icon} alt="" /></td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TabelPeminjaman