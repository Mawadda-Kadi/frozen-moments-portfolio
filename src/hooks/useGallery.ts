import { useState, useEffect } from 'react';
import { photoData } from '@/data/photoData';

export const useGallery = (photosPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredPhotos, setFilteredPhotos] = useState(photoData);
    const [paginatedPhotos, setPaginatedPhotos] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    // ✅ Update filtered photos when category changes
    useEffect(() => {
        const updatedPhotos = selectedCategory === 'all'
            ? photoData
            : photoData.filter((photo) => photo.category.toLowerCase() === selectedCategory.toLowerCase());

        setFilteredPhotos(updatedPhotos);
        setCurrentPage(1); // ✅ Reset pagination when category changes
    }, [selectedCategory]);

    // ✅ Update paginated photos when `filteredPhotos` or `currentPage` changes
    useEffect(() => {
        const startIndex = (currentPage - 1) * photosPerPage;
        const paginated = filteredPhotos.slice(startIndex, startIndex + photosPerPage);

        setPaginatedPhotos(paginated);
        setTotalPages(Math.max(1, Math.ceil(filteredPhotos.length / photosPerPage))); // Prevents 0 totalPages
    }, [filteredPhotos, currentPage]);

    return {
        photos: paginatedPhotos, // ✅ Updated paginated photos
        totalPages,
        currentPage,
        setCurrentPage,
        selectedCategory,
        setSelectedCategory,
    };
};
