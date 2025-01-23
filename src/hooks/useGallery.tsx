import { useState, useEffect } from 'react';

interface Photo {
    id: string;
    src: string;
    name: string;
    category: string;
}

export const useGallery = (photosPerPage: number) => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const fetchPhotos = async () => {
        try {
            const res = await fetch(
                `/api/photos?category=${selectedCategory}&page=${currentPage}&limit=${photosPerPage}`
            );
            const data = await res.json();
            setPhotos(data.photos);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Failed to fetch photos:', error);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, [selectedCategory, currentPage]);

    return {
        photos,
        totalPages,
        currentPage,
        setCurrentPage,
        selectedCategory,
        setSelectedCategory,
    };
};

