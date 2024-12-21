import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Redux-Toolkit Project</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <AddBookForm />
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default App;