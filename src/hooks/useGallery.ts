import { useState, useEffect } from 'react';
import { photoData } from '@/data/photoData';

interface Photo {
    id: number;
    src: string;
    name: string;
    category: string;
    camera: string;
    lens: string;
    camera_position: string;
    location: string;
    date: string;
    description: string;
}

export const useGallery = (photosPerPage: number) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>(photoData);
    const [paginatedPhotos, setPaginatedPhotos] = useState<Photo[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);

    // Debugging - Log category names in `photoData.ts`
    useEffect(() => {
        console.log("📸 Available Categories in photoData:", [...new Set(photoData.map(photo => photo.category))]);
    }, []);

    // Update filtered photos when category changes
    useEffect(() => {
        const updatedPhotos = selectedCategory === 'all'
            ? photoData
            : photoData.filter((photo) => {
                if (!photo.category) return false;
                console.log(`🔍 Checking Photo: ${photo.name} | Category: ${photo.category}`);
                return photo.category.toLowerCase() === selectedCategory.toLowerCase();
            });

        console.log(`🔍 Selected Category: ${selectedCategory}`);
        console.log("📸 Filtered Photos:", updatedPhotos);

        setFilteredPhotos(updatedPhotos);
        setCurrentPage(1); // Reset pagination when category changes
    }, [selectedCategory]);

    // Update paginated photos
    useEffect(() => {
        const startIndex = (currentPage - 1) * photosPerPage;
        const paginated: Photo[] = filteredPhotos.slice(startIndex, startIndex + photosPerPage);

        setPaginatedPhotos(paginated);
        setTotalPages(Math.max(1, Math.ceil(filteredPhotos.length / photosPerPage))); // Prevents 0 totalPages
    }, [filteredPhotos, currentPage]);

    return {
        photos: paginatedPhotos,
        totalPages,
        currentPage,
        setCurrentPage,
        selectedCategory,
        setSelectedCategory,
    };
};
