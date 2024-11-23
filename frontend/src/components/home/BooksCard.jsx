
import BookSingleCard from './BookSingleCard.jsx'

const BooksCard = ({books}) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {books.map((item)=>(
        <BookSingleCard key={item._id} book={item}/>
      ))}
    </div>
  )
}

export default BooksCard
