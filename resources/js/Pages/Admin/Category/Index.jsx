import React, { useState } from 'react';
import { router, useForm, usePage } from '@inertiajs/react';
import Table from '@/Components/Table/Table';
import CustomModal from '@/Components/Modals/Modal';
import AuthenticatedAdmin from "@/Components/Layouts/Admin/AuthanticatedAdmi";
import ImageUpload from '@/Components/Upload/ImageUpload';

export default function CategoryIndex() {
    const { categories, flash, auth } = usePage().props;
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [categoryId, setCategoryId] = useState(null);

    const { data, setData, post, put, reset, errors } = useForm({
        name: '',
        description: '',
        parent_id: '',
        order: '',
        image_url: '',
        status: false,
    });

    const handleOpen = (category = null) => {
        if (category) {
            setEditMode(true);
            setCategoryId(category.id);
            setData({
                name: category.name,
                description: category.description,
                slug: category.slug,
                parent_id: category.parent_id,
                order: category.order,
                status: category.status,
                image_url: category.image_url || '',
            });
        } else {
            setEditMode(false);
            reset();
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        reset();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            put(route('categories.update', categoryId), {
                onSuccess: () => handleClose(),
            });
        } else {
            post(route('categories.store'), {
                onSuccess: () => handleClose(),
            });
        }
    };
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this category?')) {
            router.delete(route('categories.destroy', id), {
                onSuccess: () => {
                    toast.success('Category successfully deleted');
                },
                onError: () => {
                    toast.error('Failed to delete category');
                }
            });
        }
    };


    const columns = [
        { label: 'UUID', accessor: 'id', columnWidths: 100 },
        { label: 'Name', accessor: 'name', },
        { label: 'Slug', accessor: 'slug', },
        { label: 'Order', accessor: 'order', render: (row) => <span>{row.order ? 'Main Category' : 'Sub Category'}</span>, },
        { label: 'Active', accessor: 'status', render: (row) => <span>{row.status ? 'active' : 'In active'}</span>, },
    ];

    return (
        <>
            <AuthenticatedAdmin title='Admin Category' user={auth.user}>
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Category List</h1>

                    {flash.success && (
                        <div className="mb-4 p-4 bg-green-200 text-green-800 rounded">
                            {flash.success}
                        </div>
                    )}

                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
                        onClick={() => handleOpen()}
                    >
                        Add New Category
                    </button>

                    <Table
                        columns={columns}
                        data={categories}
                        onEdit={handleOpen}
                        onDelete={handleDelete}
                    />

                    <CustomModal isOpen={open} id="modal-c" onRequestClose={handleClose} title={editMode ? 'Edit Category' : 'Add Category'}>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    className="w-full border border-slate-200 px-3 py-2 rounded"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                {errors.name && <div className="text-red-600">{errors.name}</div>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="description">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    className="w-full border border-slate-200 px-3 py-2 rounded"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    required
                                />
                                {errors.description && <div className="text-red-600">{errors.description}</div>}
                            </div>

                            {data.order === 0 ? (
                                <>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-1" htmlFor="parent_id">
                                            Parent ID
                                        </label>
                                        <input
                                            id="parent_id"
                                            className="w-full border border-slate-200 px-3 py-2 rounded"
                                            type="number"
                                            value={data.parent_id}
                                            onChange={(e) => setData('parent_id', e.target.value)}
                                        />
                                        {errors.parent_id && <div className="text-red-600">{errors.parent_id}</div>}
                                    </div>
                                </>
                            ) : null}


                            <div className="mb-4">
                                <ImageUpload
                                    name="image_url"
                                    existingImageUrl={data.image_url ? `/storage/${data.image_url}` : null}
                                    onChange={(file) => setData('image_url', file)}
                                />
                                {errors.image_url && <div className="text-red-600">{errors.image_url}</div>}
                            </div>

                            <div className='flex flex-row gap-4 mt-5'>
                                <div className="mb-4 flex items-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            value=""
                                            className="sr-only peer"
                                            checked={data.order === 1}
                                            onChange={(e) => setData('order', e.target.checked ? 1 : 0)}
                                        />
                                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
                                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            {data.order === 1 ? 'Main Category' : 'Sub Category'}
                                        </span>
                                    </label>
                                    {errors.order && <div className="text-red-600">{errors.order}</div>}
                                </div>

                                <div className="mb-4 flex items-center">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            value=""
                                            className="sr-only peer"
                                            checked={data.status === 1}
                                            onChange={(e) => setData('status', e.target.checked ? 1 : 0)}
                                        />
                                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
                                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                                    </label>
                                    {errors.status && <div className="text-red-600">{errors.status}</div>}
                                </div>
                            </div>

                            <div className="flex justify-between space-x-2 mt-5">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    {editMode ? 'Update' : 'Create'}
                                </button>

                                <button
                                    type="button"
                                    className="bg-gray-300 px-4 py-2 rounded"
                                    onClick={handleClose}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </CustomModal>
                </div>
            </AuthenticatedAdmin>
        </>
    );
};
