import React, { useState } from 'react';
import { router, useForm, usePage } from '@inertiajs/react';
import Table from '@/Components/Table/Table';
import CustomModal from '@/Components/Modals/Modal';
import AuthenticatedAdmin from '@/Components/Layouts/Admin/AuthanticatedAdmi';
import { FaHistory } from "react-icons/fa";
import { LiaTrashRestoreAltSolid } from "react-icons/lia";
import { IoMdAdd } from "react-icons/io";

export default function SkillIndex() {
    const { skills, deletedskills, flash, auth } = usePage().props;
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [skillId, setSkillId] = useState(null);
    const [deletedOpen, setDeletedOpen] = useState(false);
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [skillToDelete, setSkillToDelete] = useState(null);
    const [confirmRestoreOpen, setConfirmRestoreOpen] = useState(false);
    const [skillToRestore, setSkillToRestore] = useState(null);

    const { data, setData, post, put, reset, errors } = useForm({
        name: '',
        description: '',
        icon: '',
        level: '',
    });

    console.log(skills);

    const handleOpen = (skill = null) => {
        if (skill) {
            setEditMode(true);
            setSkillId(skill.id);
            setData({
                name: skill.name,
                description: skill.description,
                icon: skill.icon,
                level: skill.level,
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
            put(route('skill.update', skillId), {
                onSuccess: () => handleClose(),
            });
        } else {
            post(route('skill.store'), {
                onSuccess: () => handleClose(),
            });
        }
    };

    const confirmDelete = () => {
        if (skillToDelete) {
            router.delete(route('skill.destroy', skillToDelete), {
                onSuccess: () => {
                    setConfirmDeleteOpen(false);
                },
                onError: () => {
                }
            });
        }
    };

    const handleDelete = (id) => {
        setSkillToDelete(id);
        setConfirmDeleteOpen(true);
    };

    const handleRestore = (id) => {
        setSkillToRestore(id);
        setConfirmRestoreOpen(true);
    };

    const confirmRestore = () => {
        if (skillToRestore) {
            router.patch(route('skill.restore', skillToRestore), {
                onSuccess: () => {
                    setConfirmRestoreOpen(false);
                },
                onError: (err) => {
                }
            });
        }
    };

    const deletedColumns = [
        { label: 'Name', accessor: 'name', },
        {
            label: 'Trigger', accessor: 'restore', render: (row) => (
                <button
                    className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                    onClick={() => handleRestore(row.id)}
                >
                    <LiaTrashRestoreAltSolid />
                </button>
            )
        },
    ];

    const columns = [
        { label: 'UUID', accessor: 'id', columnWidths: 100 },
        { label: 'Name', accessor: 'name', },
        { label: 'Level', accessor: 'level', },
    ];

    return (
        <>
            <AuthenticatedAdmin title='Admin Skill' user={auth.user}>
                <div className="p-6">
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className="text-2xl font-bold mb-4">Skill List</h1>

                        <div className='flex flex-row items-center gap-3'>
                            <button
                                className="flex flex-row gap-2 items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
                                onClick={() => handleOpen()}
                            >
                                <IoMdAdd />
                                Add New Skill
                            </button>

                            <button
                                className="flex flex-row gap-2 items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4 ml-4"
                                onClick={() => setDeletedOpen(true)}
                            >
                                <FaHistory />
                                Restored
                            </button>
                        </div>
                    </div>

                    {flash.success && (
                        <div className="mb-4 p-4 bg-green-200 text-green-800 rounded">
                            {flash.success}
                        </div>
                    )}

                    <Table
                        columns={columns}
                        data={skills}
                        onEdit={handleOpen}
                        onDelete={handleDelete}
                    />

                    <CustomModal isOpen={deletedOpen} id="modal-deleted" onRequestClose={() => setDeletedOpen(false)} title="Deleted Skills">
                        <div className="overflow-x-auto">
                            <Table
                                columns={deletedColumns}
                                data={deletedskills}
                                action={false}
                            />
                        </div>
                        <button
                            className="bg-gray-300 px-4 py-2 rounded mt-4"
                            onClick={() => setDeletedOpen(false)}
                        >
                            Close
                        </button>
                    </CustomModal>

                    <CustomModal isOpen={confirmDeleteOpen} id="modal-delete-confirmation" onRequestClose={() => setConfirmDeleteOpen(false)} title="Confirm Deletion">
                        <p>Are you sure you want to delete this skill?</p>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                                onClick={confirmDelete}
                            >
                                Yes, Delete
                            </button>
                            <button
                                className="bg-gray-300 px-4 py-2 rounded"
                                onClick={() => setConfirmDeleteOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </CustomModal>

                    <CustomModal isOpen={confirmRestoreOpen} id="modal-restore-confirmation" onRequestClose={() => setConfirmRestoreOpen(false)} title="Confirm Restoration">
                        <p>Are you sure you want to restore this skill?</p>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                                onClick={confirmRestore}
                            >
                                Yes, Restore
                            </button>
                            <button
                                className="bg-gray-300 px-4 py-2 rounded"
                                onClick={() => setConfirmRestoreOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </CustomModal>

                    <CustomModal isOpen={open} id="modal-skill" onRequestClose={handleClose} title={editMode ? 'Edit Skill' : 'Add Skill'}>
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

                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="level">
                                    Level
                                </label>
                                <select
                                    id="level"
                                    className="w-full border border-slate-200 px-3 py-2 rounded"
                                    value={data.level}
                                    onChange={(e) => setData('level', e.target.value)}
                                    required
                                >
                                    <option value="">Select Level</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="expert">Expert</option>
                                </select>
                                {errors.level && <div className="text-red-600">{errors.level}</div>}
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
